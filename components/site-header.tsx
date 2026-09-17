import Link from "next/link";

export function SiteHeader() {
  return (
    <>
      <aside className="cc-rail" aria-hidden="true">
        <span>TTY / 01</span>
        <div className="cc-rail-line" />
        <span>ENCRYPTED</span>
        <span>SESSION</span>
      </aside>
      <header className="cc-header">
        <Link className="cc-brand" href="/">
          <span className="cc-mark">&gt;_</span>
          <span>
            CYBERCENTAURI<br />
            <em>~/SECURITY_RESEARCH</em>
          </span>
        </Link>
        <div className="cc-system-status" aria-label="System online">
          <i />
          <span>SYS.ONLINE</span>
          <time>SITE</time>
        </div>
        <nav className="cc-nav" aria-label="Main navigation">
          <Link href="/#profile">Operator Profile</Link>
          <Link href="/writeups/">Writeup Archive</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}
