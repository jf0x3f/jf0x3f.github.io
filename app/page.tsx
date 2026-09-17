import Link from "next/link";
import { Terminal } from "@/components/terminal";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main id="top">
      <section className="cc-section cc-hero">
        <div className="cc-hero-grid"><Terminal /></div>
      </section>

      <section className="cc-section cc-profile cc-terminal-section" id="profile" hidden aria-hidden="true">
        <div className="cc-heading cc-profile-heading">
          <div><p className="cc-kicker">$ cat profile.txt</p><h2>Profile.</h2></div>
        </div>
        <div className="cc-profile-grid">
          <article className="cc-profile-card">
            <header><span>Languages</span></header>
            <ul className="cc-skill-list"><li><span>PY</span><b>Python</b></li><li><span>JS</span><b>JavaScript</b></li><li><span>RB</span><b>Ruby</b></li><li><span>PHP</span><b>PHP</b></li></ul>
          </article>
          <article className="cc-profile-card">
            <header><span>Areas of work</span></header>
            <ul className="cc-capability-list"><li>Web development</li><li>Offensive security</li><li>Defensive security</li><li>Networking</li></ul>
          </article>
          <article className="cc-profile-card cc-achievements">
            <header><span>Recognition</span></header>
            <div className="cc-achievement-grid"><div className="cc-hof"><p>Hall of Fame recognition from the United Nations, World Health Organization, Siemens, MediaTek, SAP, Google, NASA, and others.</p></div><div className="cc-rank"><small>Hack The Box</small><strong>#5</strong><span>Philippines</span></div><div className="cc-rank"><small>Hack The Box</small><strong>#400</strong><span>Global</span></div></div>
          </article>
          <article className="cc-profile-card cc-certifications">
            <header><span>Certifications</span></header>
            <ol className="cc-cert-list"><li><span>01</span><div><b>Certified Penetration Testing Specialist</b><small>Hack The Box</small></div></li><li><span>02</span><div><b>Certified in Cybersecurity</b><small>ISC2</small></div></li><li><span>03</span><div><b>Certified Web Penetration Tester</b><small>Appkademiya</small></div></li><li><span>04</span><div><b>Cybersecurity Awareness Professional Certificate</b><small>Certiprof</small></div></li><li><span>05</span><div><b>Certified Cybersecurity Educator Professional</b><small>RedTeam Leaders</small></div></li><li><span>06</span><div><b>Certified Web Red Team Analyst</b><small>CyberWarFare Labs</small></div></li></ol>
          </article>
        </div>
      </section>

      <section className="cc-section cc-writeups cc-terminal-section" id="writeups" hidden aria-hidden="true">
        <div className="cc-heading"><div><p className="cc-kicker">$ ls writeups/</p><h2>Writeups.</h2></div></div>
        <div className="cc-writeup-intro"><p>Notes from security labs, certification study, and practical research.</p></div>
        <div className="cc-writeup-feed">
          <div className="cc-feed-heading"><p className="cc-kicker">Latest entries</p><Link href="/writeups/">View all</Link></div>
          <div className="cc-posts">{posts.slice(0, 3).map((post, index) => <Link className="cc-post" href={`/writeups/${post.slug}/`} key={post.slug}><span>{String(index + 1).padStart(2, "0")}</span><small>Writeup</small><h3>{post.title}</h3><time>{new Date(`${post.date}Z`).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" })}</time><i aria-hidden="true">-&gt;</i></Link>)}</div>
        </div>
      </section>

      <section className="cc-section cc-contact cc-terminal-section" id="contact" hidden aria-hidden="true">
        <p className="cc-kicker">$ open contact.txt</p>
        <div className="cc-two"><div><h2>Get in touch.</h2></div><div className="cc-contact-copy"><p>For security research, collaboration, or professional inquiries.</p><div className="cc-contact-channels"><a className="cc-contact-link" href={`mailto:${site.email}`}><span>01</span><div><small>Email</small><b>{site.email}</b></div><i aria-hidden="true">-&gt;</i></a><a className="cc-contact-link" href={site.github} target="_blank" rel="noreferrer"><span>02</span><div><small>GitHub</small><b>github.com/jf0x3a</b></div><i aria-hidden="true">-&gt;</i></a><a className="cc-contact-link" href={site.linkedin} target="_blank" rel="noreferrer"><span>03</span><div><small>LinkedIn</small><b>john-fiel-brosas</b></div><i aria-hidden="true">-&gt;</i></a></div></div></div>
      </section>
    </main>
  );
}
