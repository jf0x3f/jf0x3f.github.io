import Link from "next/link";
import { Terminal } from "@/components/terminal";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main id="top">
      <section className="cc-section cc-hero">
        <div className="cc-command-path uppercase"><span>visitor@cybercentauri</span>:<b>~/research</b>$ ./initialize.sh</div>
        <div className="cc-hero-grid"><Terminal /></div>
        <div className="cc-focus"><span>[ ACTIVE MODULES ]</span><b>WEB_SEC</b><b>CLOUD</b><b>LABS</b><b>EDR</b><b>CERT_PREP</b><em>6 PROCESSES RUNNING</em></div>
      </section>

      <section className="cc-section cc-profile cc-terminal-section" id="profile">
        <div className="cc-heading cc-profile-heading"><div><p className="cc-kicker">root@cc:~$ cat /home/jf0x3f/operator-profile.yml</p><h2>Operator <span>profile.</span></h2></div><span>[ CAPABILITIES / CREDENTIALS ]</span></div>
        <div className="cc-profile-grid">
          <article className="cc-profile-card"><header><span>01 / STACK</span><i>LOADED</i></header><h3>Programming languages</h3><ul className="cc-skill-list"><li><span>PY</span><b>Python</b><i>available</i></li><li><span>JS</span><b>JavaScript</b><i>available</i></li><li><span>RB</span><b>Ruby</b><i>available</i></li><li><span>PHP</span><b>PHP</b><i>available</i></li></ul></article>
          <article className="cc-profile-card"><header><span>02 / CAPABILITIES</span><i>ACTIVE</i></header><h3>Technical skills</h3><ul className="cc-capability-list"><li><span>01</span>Web Development</li><li><span>02</span>Offensive Security</li><li><span>03</span>Defensive Security</li><li><span>04</span>Networking</li></ul></article>
          <article className="cc-profile-card cc-achievements"><header><span>03 / RECOGNITION</span><i>VERIFIED</i></header><h3>Achievements</h3><div className="cc-achievement-grid"><div className="cc-hof"><span>HALL OF FAME</span><p>Recognized by the United Nations, World Health Organization, Siemens, MediaTek, SAP, Google, NASA, and more.</p></div><div className="cc-rank"><small>HACK THE BOX</small><strong>#5</strong><span>PHILIPPINES</span></div><div className="cc-rank"><small>HACK THE BOX</small><strong>#400</strong><span>GLOBAL</span></div></div></article>
          <article className="cc-profile-card cc-certifications"><header><span>04 / CREDENTIALS</span><i>6 RECORDS</i></header><h3>Certifications</h3><ol className="cc-cert-list"><li><span>01</span><div><b>Certified Penetration Testing Specialist</b><small>Hack The Box</small></div></li><li><span>02</span><div><b>Certified in Cybersecurity</b><small>ISC2</small></div></li><li><span>03</span><div><b>Certified Web Penetration Tester</b><small>Appkademiya</small></div></li><li><span>04</span><div><b>Cybersecurity Awareness Professional Certificate</b><small>Certiprof</small></div></li><li><span>05</span><div><b>Certified Cybersecurity Educator Professional</b><small>RedTeam Leaders</small></div></li><li><span>06</span><div><b>Certified Web Red Team Analyst</b><small>CyberWarFare Labs</small></div></li></ol></article>
        </div>
      </section>

      <section className="cc-section cc-writeups cc-terminal-section" id="writeups">
        <div className="cc-heading"><div><p className="cc-kicker">root@cc:~$ ls ./writeups --sort=latest</p><h2>Writeup <span>directories.</span></h2></div><span>[ AUTHORIZED LABS / CLEAR NOTES ]</span></div>
        <div className="cc-writeup-intro"><p>Method-focused security writeups built around reconnaissance, validation, evidence, and remediation—enough direction to keep readers moving without turning the work into an answer dump.</p></div>
        <div className="cc-sectors" aria-label="Writeup sectors"><div><b><i>drwxr-xr-x</i> Hack The Box</b><span>./METHOD_NOTES</span><p>Enumeration, validation, and remediation from authorized machines.</p></div><div><b><i>drwxr-xr-x</i> TryHackMe</b><span>./LEARNING_PATHS</span><p>Concept checkpoints and practical lab reflections.</p></div><div><b><i>drwxr-xr-x</i> Certification prep</b><span>./STUDY_LAB_GUIDES</span><p>Original practice flows focused on transferable skills.</p></div></div>
        <div className="cc-writeup-feed"><div className="cc-feed-heading"><p className="cc-kicker">tail -n 3 /var/log/transmissions.log</p><Link href="/writeups/">STATIC_INDEX: ONLINE</Link></div><div className="cc-posts">{posts.slice(0, 3).map((post, index) => <Link className="cc-post" href={`/writeups/${post.slug}/`} key={post.slug}><span>{String(index + 1).padStart(2, "0")}</span><small>ORBIT / WRITEUP</small><h3>{post.title}</h3><time>{new Date(`${post.date}Z`).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" })}</time><i>↗</i></Link>)}</div></div>
      </section>

      <section className="cc-section cc-contact cc-terminal-section" id="contact">
        <p className="cc-kicker">root@cc:~$ ./open-channel --encrypted</p><div className="cc-two"><div><div className="cc-signal"><i /> PORT 443 / CHANNEL OPEN</div><h2>Start a secure<br /><span>conversation.</span></h2></div><div className="cc-contact-copy"><p>Choose a channel for research discussions, security collaboration, or professional connections.</p><div className="cc-contact-channels"><a className="cc-contact-link" href={`mailto:${site.email}`}><span>01</span><div><small>EMAIL</small><b>{site.email}</b></div><em>DIRECT</em><i>↗</i></a><a className="cc-contact-link" href={site.github} target="_blank" rel="noreferrer"><span>02</span><div><small>GITHUB</small><b>github.com/jf0x3f</b></div><em>CODE</em><i>↗</i></a><a className="cc-contact-link" href={site.linkedin} target="_blank" rel="noreferrer"><span>03</span><div><small>LINKEDIN</small><b>john-fiel-brosas</b></div><em>NETWORK</em><i>↗</i></a></div></div></div>
      </section>
    </main>
  );
}
