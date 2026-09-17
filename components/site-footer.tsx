import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="cc-footer">
      <Link className="cc-brand" href="/#top">
        <span className="cc-mark">&gt;_</span>
        <span>
          CYBERCENTAURI<br />
          <em>~/SECURITY_RESEARCH</em>
        </span>
      </Link>
      <p>
        <span className="cc-footer-prompt">$</span> Independent research for responsible defenders.
      </p>
      <nav>
        <Link href="/#profile">PROFILE</Link>
        <Link href="/writeups/">WRITEUPS</Link>
        <Link href="/#contact">EMAIL</Link>
      </nav>
      <span>© {new Date().getFullYear()} / EOF_</span>
    </footer>
  );
}
