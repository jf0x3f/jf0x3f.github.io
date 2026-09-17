"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

type Entry = { command?: string; message: string; error?: boolean };

const aliases: Record<string, string> = {
  skills: "profile",
  capabilities: "profile",
  achievements: "profile",
  certifications: "profile",
  certs: "profile",
  work: "writeups",
  posts: "writeups",
  blog: "writeups",
  socials: "contact",
  email: "contact",
  github: "contact",
  linkedin: "contact",
};

const commands = ["help", "ls", "profile", "skills", "writeups", "contact", "socials", "all", "home", "clear", "whoami", "pwd"];

export function Terminal() {
  const [value, setValue] = useState("");
  const [entries, setEntries] = useState<Entry[]>([
    { message: 'Interactive shell ready. Type "help" to list commands.' },
  ]);
  const commandHistory = useRef<string[]>([]);
  const historyIndex = useRef(0);

  useEffect(() => {
    document.documentElement.classList.add("cc-js");
  }, []);

  function append(entry: Entry) {
    setEntries((current) => [...current, entry].slice(-6));
  }

  function reveal(name: string) {
    const resolved = aliases[name] ?? name;
    const section = document.getElementById(resolved);
    if (!section || !["profile", "writeups", "contact"].includes(resolved)) return false;
    section.hidden = false;
    section.setAttribute("aria-hidden", "false");
    section.classList.remove("cc-section-enter");
    requestAnimationFrame(() => section.classList.add("cc-section-enter"));
    window.history.replaceState(null, "", `#${resolved}`);
    window.setTimeout(() => section.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    return resolved;
  }

  function run(raw: string) {
    const normalized = raw.trim().toLowerCase().replace(/^\.\//, "");
    if (!normalized) return;
    commandHistory.current.push(raw.trim());
    historyIndex.current = commandHistory.current.length;
    const parts = normalized.split(/\s+/);
    const command = ["show", "open", "cd"].includes(parts[0]) && parts[1] ? parts[1] : parts[0];

    if (command === "clear") return setEntries([]);
    if (command === "help" || command === "--help") return append({ command: raw, message: "Commands: profile, writeups, contact, all, home, ls, whoami, pwd, clear" });
    if (command === "ls") return append({ command: raw, message: "profile/  writeups/  contact/" });
    if (command === "whoami") return append({ command: raw, message: 'John Fiel "jf0x3a" Brosas' });
    if (command === "pwd") return append({ command: raw, message: "/home/visitor/cybercentauri" });
    if (command === "all") {
      ["profile", "writeups", "contact"].forEach((id) => {
        const element = document.getElementById(id);
        if (element) element.hidden = false;
      });
      return append({ command: raw, message: "All homepage modules mounted." });
    }
    if (command === "home" || command === "exit") {
      ["profile", "writeups", "contact"].forEach((id) => {
        const element = document.getElementById(id);
        if (element) element.hidden = true;
      });
      document.querySelector(".cc-hero")?.scrollIntoView({ behavior: "smooth" });
      return append({ command: raw, message: "Modules unmounted. Terminal workspace active." });
    }
    const target = reveal(command);
    append(target ? { command: raw, message: `${target}/ mounted successfully.` } : { command: raw, message: `command not found: ${command}. Type "help" for available commands.`, error: true });
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const command = value;
    setValue("");
    run(command);
  }

  function keyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp" && commandHistory.current.length) {
      event.preventDefault();
      historyIndex.current = Math.max(0, historyIndex.current - 1);
      setValue(commandHistory.current[historyIndex.current]);
    } else if (event.key === "ArrowDown" && commandHistory.current.length) {
      event.preventDefault();
      historyIndex.current = Math.min(commandHistory.current.length, historyIndex.current + 1);
      setValue(historyIndex.current === commandHistory.current.length ? "" : commandHistory.current[historyIndex.current]);
    } else if (event.key === "Tab") {
      const match = commands.find((command) => command.startsWith(value.trim().toLowerCase()));
      if (match) {
        event.preventDefault();
        setValue(match);
      }
    }
  }

  return (
    <div className="cc-terminal" aria-label="CyberCentauri system overview">
      <div className="cc-terminal-bar"><span><i /><i /><i /></span><b>Terminal — visitor@cybercentauri: ~/research</b><em>×</em></div>
      <div className="cc-terminal-menu"><span>File</span><span>Edit</span><span>View</span><span>Search</span><span>Tabs</span><span>Help</span></div>
      <div className="cc-terminal-body">
        <p className="cc-command"><span className="cc-prompt">└─$</span> whoami</p>
        <p className="cc-terminal-ready-2 text-center text-4xl text-terminal-cyan">John Fiel &quot;jf0x3a&quot; Brosas</p>
        <p className="cc-command"><span className="cc-prompt">└─$</span> cat mission.txt</p>
        <p className="cc-output">Document. Demystify. Defend.</p>
        <p className="cc-command"><span className="cc-prompt">└─$</span> ls ./focus</p>
        <div className="cc-terminal-grid"><span>web_security/</span><span>cloud/</span><span>labs/</span><span>edr/</span><span>cert_prep/</span><span>field_notes/</span></div>
        <div className="cc-terminal-output" aria-live="polite">
          {entries.map((entry, index) => <div className={`cc-terminal-line is-${entry.error ? "error" : "success"}`} key={`${entry.command}-${index}`}>{entry.command && <span>└─$ {entry.command}</span>}<p>{entry.message}</p></div>)}
        </div>
        <form className="cc-terminal-form" onSubmit={submit} autoComplete="off">
          <label htmlFor="cc-terminal-input"><span>┌──(visitor㉿cybercentauri)-[~/research]</span><b>└─$</b></label>
          <div className="cc-input-shell"><span className="cc-input-indicator" aria-hidden="true" /><input id="cc-terminal-input" value={value} onChange={(event) => setValue(event.target.value)} onKeyDown={keyDown} spellCheck={false} autoCapitalize="none" placeholder="type help" /></div>
          <button type="submit">RUN</button>
        </form>
        <p className="cc-terminal-hint">Try <code>help</code> · history <code>↑ ↓</code> · autocomplete <code>Tab</code></p>
      </div>
    </div>
  );
}
