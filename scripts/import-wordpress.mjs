import fs from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const wordpressRoot = path.resolve(process.argv[2] ?? projectRoot);
const sqlPath = path.join(wordpressRoot, "softsql.sql");
const uploadsRoot = path.join(wordpressRoot, "wp-content", "uploads");

if (!fs.existsSync(sqlPath)) {
  throw new Error(`WordPress SQL dump not found: ${sqlPath}`);
}

const sql = fs.readFileSync(sqlPath, "utf8");

function parseRows(table) {
  const marker = `INSERT INTO \`${table}\` VALUES`;
  const output = [];
  let searchFrom = 0;

  while (true) {
    const insertAt = sql.indexOf(marker, searchFrom);
    if (insertAt < 0) break;
    let cursor = sql.indexOf("(", insertAt);
    let row = [];
    let value = "";
    let quoted = false;
    let started = false;

    for (; cursor < sql.length; cursor += 1) {
      const character = sql[cursor];
      const next = sql[cursor + 1];
      if (quoted) {
        if (character === "'" && next === "'") {
          value += "'";
          cursor += 1;
        } else if (character === "\\") {
          const escapes = { n: "\n", r: "\r", t: "\t", "0": "\0", b: "\b", Z: "\x1a" };
          value += escapes[next] ?? next;
          cursor += 1;
        } else if (character === "'") {
          quoted = false;
        } else {
          value += character;
        }
      } else if (character === "'") {
        quoted = true;
      } else if (character === "(" && !started) {
        started = true;
        value = "";
      } else if (character === "," && started) {
        row.push(value.trim() === "NULL" ? null : value.trim());
        value = "";
      } else if (character === ")" && started) {
        row.push(value.trim() === "NULL" ? null : value.trim());
        output.push(row);
        row = [];
        value = "";
        started = false;
        let nextToken = cursor + 1;
        while (/\s/.test(sql[nextToken])) nextToken += 1;
        if (sql[nextToken] === ";") {
          cursor = nextToken;
          break;
        }
        cursor = nextToken - 1;
      } else if (started) {
        value += character;
      }
    }
    searchFrom = cursor + 1;
  }
  return output;
}

function cleanContent(content) {
  return content
    .replace(/<!--\s*\/?wp:[\s\S]*?-->/g, "")
    .replace(/https?:\/\/cybercentauri\.com\/wp-content\/uploads\//gi, "/uploads/")
    .replace(/http:\/\/cybercentauri\.com\//gi, "/")
    .replace(/\r\n/g, "\n")
    .trim();
}

function plainText(html) {
  return html
    .replace(/<pre[\s\S]*?<\/pre>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const terms = Object.fromEntries(parseRows("wpcg_terms").map((row) => [row[0], { name: row[1], slug: row[2] }]));
const taxonomy = Object.fromEntries(parseRows("wpcg_term_taxonomy").map((row) => [row[0], { termId: row[1], type: row[2] }]));
const relationships = parseRows("wpcg_term_relationships");

const posts = parseRows("wpcg_posts")
  .filter((row) => row[7] === "publish" && row[20] === "post")
  .map((row) => {
    const content = cleanContent(row[4]);
    const categories = relationships
      .filter((relationship) => relationship[0] === row[0])
      .map((relationship) => taxonomy[relationship[1]])
      .filter((item) => item?.type === "category")
      .map((item) => terms[item.termId])
      .filter(Boolean);
    const image = content.match(/src=["'](\/uploads\/[^"']+)/i)?.[1] ?? null;
    return {
      id: Number(row[0]),
      slug: row[11],
      title: row[5],
      date: row[2].replace(" ", "T"),
      modified: row[14].replace(" ", "T"),
      excerpt: row[6] || `${plainText(content).slice(0, 185).trim()}…`,
      content,
      categories,
      image,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const contentDir = path.join(projectRoot, "content");
fs.mkdirSync(contentDir, { recursive: true });
fs.writeFileSync(path.join(contentDir, "posts.json"), `${JSON.stringify(posts, null, 2)}\n`);

const referencedUploads = new Set(
  posts.flatMap((post) => [...post.content.matchAll(/(?:src|href)=["']\/uploads\/([^"']+)/gi)].map((match) => match[1])),
);
for (const relativePath of referencedUploads) {
  const source = path.join(uploadsRoot, ...relativePath.split("/"));
  const destination = path.join(projectRoot, "public", "uploads", ...relativePath.split("/"));
  if (!fs.existsSync(source)) {
    console.warn(`Missing referenced upload: ${source}`);
    continue;
  }
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

console.log(`Imported ${posts.length} published posts and ${referencedUploads.size} referenced uploads.`);
