# CyberCentauri

CyberCentauri is a statically generated Next.js cybersecurity blog migrated from the original WordPress installation. It preserves the custom terminal-style design, all published writeups, categories, images, metadata, interactive shell, and responsive layouts without requiring PHP or MySQL.

## Local development

Requirements: Node.js 22 and npm.

```powershell
npm install
npm run dev
```

Open <http://localhost:3000>. Production checks:

```powershell
npm run lint
npm run typecheck
npm run build
```

The static export is generated in `out/`.

## Content migration

The committed `content/posts.json` contains the 13 published posts imported from the local WordPress database backup. Referenced media is copied into `public/uploads/`.

To repeat the import from the WordPress backup:

```powershell
npm run import:wordpress -- "E:\project\cybercentauri"
```

The importer reads `softsql.sql`, migrates published posts and categories, rewrites WordPress upload URLs, and copies only media referenced by published posts. The SQL dump and complete WordPress installation remain ignored and are never deployed.

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy-pages.yml` and deploy the static `out/` directory as the primary GitHub Pages site.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The published URL is:

<https://jf0x3f.github.io/>
