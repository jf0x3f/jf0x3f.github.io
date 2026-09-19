export const cptsPreparationPost = {
  id: 187,
  slug: "preparing-for-htb-cpts",
  title: "Preparing for HTB CPTS: A Field Guide to the Ten-Day Marathon",
  date: "2026-09-19T10:00:00",
  modified: "2026-09-19T10:00:00",
  excerpt:
    "A practical, no-spoiler guide to the CPTS journey: building a methodology, surviving the Academy path, managing a multi-day exam, and writing a report that holds up.",
  categories: [
    { name: "htb", slug: "htb" },
    { name: "certification", slug: "certification" },
  ],
  image: "/uploads/2026/09/cpts/intro.png",
  content: String.raw`
<article class="htb-writeup cpts-field-guide">
  <p><em>A practical, no-spoiler preparation guide for the HackTheBox Certified Penetration Testing Specialist exam—covering the Academy path, lab practice, note-taking, reporting, exam-week pacing, and the emotional reality of getting stuck.</em></p>

  <figure class="cpts-figure cpts-figure-hero">
    <img src="/uploads/2026/09/cpts/intro.png" alt="A security researcher beginning the CPTS preparation journey at a night-time workstation." width="1672" height="941" />
    <figcaption>The exam starts long before the timer does. It starts when a repeatable process replaces guesswork.</figcaption>
  </figure>

  <h2>Before the terminal opens</h2>
  <p>The hardest part of the HTB Certified Penetration Testing Specialist (CPTS) journey is not a clever payload or an obscure Windows command. It is learning to stay methodical when nothing works.</p>
  <p>That lesson usually arrives late at night. You have a shell on one host, a handful of credentials, and a tunnel that worked twenty minutes ago. Your scan results are spread across three terminals. One password authenticates to a service but not to the host you expected. Every lead feels <em>almost</em> right. The temptation is to search for a more exotic exploit.</p>
  <p>Then you return to your notes, notice a service you never enumerated through the pivot, and the network opens again.</p>
  <p>That is the CPTS experience in miniature. The certification is a practical penetration-testing engagement, not a trivia contest. HackTheBox expects candidates to complete the Penetration Tester job-role path, assess a black-box environment, and submit a professional report. The report is not paperwork added after the hacking; it is part of the work.</p>
  <aside><strong>A note on perspective:</strong> This guide synthesizes lessons repeated across the candidate experiences linked at the end. It deliberately contains no exam targets, flags, vulnerabilities, or solutions. Exam details can change, so confirm current rules, timing, eligibility, and submission requirements in the official portal before starting.</aside>

  <h2>What you are really preparing for</h2>
  <p>The technical syllabus is broad:</p>
  <ul>
    <li>reconnaissance and service enumeration;</li>
    <li>web application testing and common foothold techniques;</li>
    <li>Windows and Linux privilege escalation;</li>
    <li>Active Directory enumeration and abuse;</li>
    <li>password attacks and credential reuse;</li>
    <li>pivoting, tunneling, and lateral movement;</li>
    <li>post-exploitation and evidence collection; and</li>
    <li>professional reporting and remediation writing.</li>
  </ul>
  <p>But the exam evaluates three deeper abilities.</p>
  <p><strong>Can you create a reliable picture from incomplete information?</strong> A port scan is not enumeration; it is the beginning of enumeration. A credential is not merely a password; it is a question to ask of every reachable service and security boundary.</p>
  <p><strong>Can you maintain state across a multi-host engagement?</strong> As the network grows, you must know which machine can reach which subnet, where each credential came from, what privilege it has, and what remains untested.</p>
  <p><strong>Can another professional reproduce and understand your work?</strong> A technically correct compromise with missing evidence, vague steps, or poor remediation is unfinished.</p>

  <h2>Build the foundation before chasing speed</h2>
  <p>The official Academy path is the center of preparation. Treat 100% completion as a floor, not a finish line. The useful question is not, “Did I complete this module?” It is, “Could I reproduce its assessment from a blank terminal next month?”</p>
  <p>For every module, use a four-pass routine:</p>
  <ol>
    <li><strong>Learn:</strong> Read actively and reproduce commands instead of pasting them blindly.</li>
    <li><strong>Explain:</strong> Rewrite each technique in your own words, including why it works and when it fails.</li>
    <li><strong>Perform:</strong> Complete the exercises and skills assessment with minimal hints.</li>
    <li><strong>Compress:</strong> Reduce the lesson into a checklist that can guide you under pressure.</li>
  </ol>
  <p>A copied command collection feels reassuring until the exam asks for a variation. A useful note explains intent:</p>
  <pre><code>SMB enumeration
Goal: identify shares, readable files, users, domain information,
      and signing policy.

Inputs needed:
- target or target range
- domain, if known
- anonymous, guest, and recovered credentials

Record:
- successful authentication context
- share permissions and interesting files
- usernames, groups, and follow-up tests</code></pre>
  <p>This survives tool changes because it records the problem, not just one invocation.</p>

  <h2>A realistic study plan</h2>
  <p>There is no honest universal timeline. Experienced testers may compress preparation; candidates studying after work may need many months. One referenced candidate completed the path over roughly eight months while working full time, which is far more relatable than a dramatic “pass in a week” headline. Consistency matters more than speed.</p>

  <h3>My six months of preparation</h3>
  <p>I gave myself six months to prepare. At the beginning, that sounded generous. Once I saw the depth of the Academy path—and how quickly a technique disappeared from memory if I only used it once—it felt realistic.</p>
  <p>Those six months were not six months of perfect productivity. Some evenings I could work through an entire section; on others, I opened my notes after a full day and managed only one lab or a thirty-minute review. There were weekends when a single skills assessment consumed the time I had planned for several modules. I stopped treating those slower days as failure. They were part of learning how to remain patient when a target refused to cooperate.</p>
  <p>The first two months were about foundations and discovering how many gaps I had. Months three and four were where the pieces began to connect: web footholds led naturally into local enumeration, recovered credentials became lateral-movement opportunities, and Active Directory stopped looking like a collection of unrelated tools. The final two months were less about collecting new commands and more about repetition—redoing assessments, repairing tunnels, practicing chained labs, and writing findings while the evidence was still fresh.</p>
  <p>The biggest change was in my notes. Early entries were command dumps. By month six, they had become decision guides: what I observed, what it might mean, what I had already ruled out, and what I should test next. That evolution made me feel ready more than any progress percentage did.</p>
  <figure class="cpts-figure">
    <img src="/uploads/2026/09/cpts/six-month-preparation.png" alt="The same researcher after six months of consistent study, surrounded by accumulated notes and a completed calendar." width="1536" height="1024" loading="lazy" />
    <figcaption>Six months was not a continuous sprint. It was a collection of ordinary evenings that gradually became a methodology.</figcaption>
  </figure>

  <h3>Phase 1 — Foundations and enumeration</h3>
  <p>Spend the first phase making reconnaissance boringly reliable. Build service-specific checklists for HTTP, DNS, SMB, LDAP, Kerberos, MSSQL, WinRM, SSH, FTP, SNMP, and the other protocols covered by the path.</p>
  <p>Your goal is to turn raw output into hypotheses:</p>
  <pre><code>Observation -&gt; Meaning -&gt; Next test -&gt; Result -&gt; New hypothesis</code></pre>
  <p>Do not merely save scan output. Annotate why a result matters.</p>

  <h3>Phase 2 — Web attacks and footholds</h3>
  <p>Practice web discovery, virtual-host enumeration, authentication analysis, file inclusion, injection classes, file upload behavior, proxy workflows, and safe payload adaptation. Work from requests and responses rather than depending entirely on automated scanners.</p>
  <p>For every successful foothold, answer:</p>
  <ul>
    <li>What clue made this path worth testing?</li>
    <li>What assumption did the application make?</li>
    <li>What evidence proves impact?</li>
    <li>How would the owner fix the root cause?</li>
  </ul>

  <h3>Phase 3 — Privilege escalation and Active Directory</h3>
  <p>Alternate Linux and Windows privilege-escalation practice so neither becomes rusty. Then spend focused time on Active Directory: identities, groups, ACLs, Kerberos, delegation, credential material, sessions, shares, and lateral movement.</p>
  <p>Draw the environment. A simple map is often more valuable than another tool:</p>
  <pre><code>ATTACK HOST
    |
    v
EDGE01 (foothold)
    |
    +-- tunnel --&gt; 10.20.0.0/24
                     |
                     +--&gt; APP01 (user)
                     +--&gt; DC01  (seen, not owned)</code></pre>
  <p>Attach credentials and evidence references to the map. The point is not artistic quality; it is reducing cognitive load.</p>
  <figure class="cpts-figure">
    <img src="/uploads/2026/09/cpts/network-pivoting.png" alt="A layered enterprise network with one carefully mapped pivot path." width="1672" height="941" loading="lazy" />
    <figcaption>A network becomes manageable when every foothold, route, and credential has a place on the map.</figcaption>
  </figure>

  <h3>Phase 4 — Chained practice and reporting</h3>
  <p>Redo the Academy capstone or enterprise-network material from the engagement letter alone. Avoid the walkthrough until you have exhausted your methodology. If time and budget allow, a chained lab such as Dante or Zephyr can help make pivoting and multi-host tracking feel routine. Candidate accounts repeatedly describe Pro Labs and retired Active Directory machines as useful—but supplementary—practice.</p>
  <p>Write at least one complete practice report. If you have never produced an executive summary, attack narrative, reproducible finding, risk explanation, and actionable remediation before exam week, the exam is a bad time to learn.</p>

  <h2>The notebook that carries the engagement</h2>
  <p>Use whatever note system you can operate quickly and export safely. The format matters less than consistency. Create one page per host and a separate credential ledger.</p>
  <h3>Host page</h3>
  <pre><code>Hostname / IP:
Role / OS:
Reachable from:
Ports and services:
Web hosts / domains:
Credentials tested:
Access obtained:
Privilege level:
Interesting files and secrets:
Potential paths:
Completed checks:
Evidence references:</code></pre>
  <h3>Credential ledger</h3>
  <table>
    <thead><tr><th>Principal</th><th>Secret type</th><th>Source</th><th>Validated against</th><th>Privilege</th><th>Status</th></tr></thead>
    <tbody><tr><td><code>domain\\user</code></td><td>password</td><td>config on APP01</td><td>SMB, WinRM</td><td>domain user</td><td>active</td></tr></tbody>
  </table>
  <p>Never store only the secret. Its origin, scope, and successful uses are what make it actionable.</p>
  <h3>Evidence log</h3>
  <p>Record commands and results as you work. Give screenshots meaningful names such as <code>APP01-03-service-account-config.png</code>, not <code>Screenshot_47.png</code>. Capture the command, the relevant output, the affected identity, and the host context. A screenshot should prove something; it should not replace reproducible text.</p>

  <h2>A readiness test that is harder to fake</h2>
  <p>You are close to ready when you can complete a multi-host practice environment and truthfully say:</p>
  <ul>
    <li>I can enumerate a host without waiting for a checklist written by someone else.</li>
    <li>I can establish and repair a tunnel without losing an hour to syntax.</li>
    <li>I retest credentials systematically across appropriate services.</li>
    <li>I know how to recover when automated tools fail.</li>
    <li>I can explain every command in my notes.</li>
    <li>I can reconstruct an attack chain the next day from my evidence.</li>
    <li>I can write remediation that addresses the cause, not just the payload.</li>
    <li>I can stop working, sleep, and resume without forgetting the state of the engagement.</li>
  </ul>
  <p>The last item is underrated. CPTS rewards continuity, not heroics.</p>

  <h2>Exam week: what the experience feels like</h2>
  <p>The first hours can feel strangely quiet. There is no instructor pointing to the next module and no machine title hinting at a theme. You receive scope and objectives, connect to the environment, and face an ordinary-looking attack surface. That ambiguity is part of the assessment.</p>

  <h3>Day 1: build the map</h3>
  <p>Read the engagement material twice. Translate it into a scope sheet and a deliverables checklist. Verify connectivity, create your folder structure, start the activity log, and perform broad discovery followed by careful service enumeration.</p>
  <p>The emotional trap on day one is urgency. You may feel behind because you do not have a shell immediately. Resist it. A clean map, verified host list, and prioritized hypotheses are progress.</p>

  <h3>Days 2–4: earn and expand access</h3>
  <p>Once the first foothold lands, pause before sprinting ahead. Capture evidence while the steps are fresh. Enumerate the local host completely: privileges, processes, services, scheduled tasks, configuration, history, keys, tokens, shares, routes, and credentials.</p>
  <p>Then update the map. New network access changes what “complete enumeration” means. Scan from the correct vantage point. Reuse credentials deliberately. Treat each host as both a target and a possible observation post into another segment.</p>
  <p>This is usually where the experience becomes exhilarating. One small finding unlocks a second host; that host exposes a credential; the credential reveals an Active Directory relationship. The environment stops looking like isolated boxes and starts looking like a system.</p>

  <h3>The wall: when nothing moves</h3>
  <p>Nearly every long practical exam has a stretch where progress stops. The worst response is random tool switching. Use a reset protocol:</p>
  <ol>
    <li>Step away for fifteen minutes.</li>
    <li>Re-read the objective and current network map.</li>
    <li>Verify tunnels, routes, DNS, time synchronization, and authentication context.</li>
    <li>Re-enumerate the latest compromised host.</li>
    <li>Review every credential and every service it has not been tested against.</li>
    <li>Separate facts from assumptions.</li>
    <li>Ask, “What can this host see that my attack machine cannot?”</li>
  </ol>
  <p>Many apparent technical walls are state-management failures: the wrong proxy path, a stale ticket, a missed virtual host, an untested share, or an assumption that a credential belongs to only one service.</p>

  <h3>Final technical days: close loops</h3>
  <p>Do not confuse “I reached the objective” with “the engagement is documented.” Re-run the critical path where safe, fill evidence gaps, validate affected assets, and make sure every finding has reproducible steps.</p>
  <p>Keep an explicit unresolved list:</p>
  <pre><code>[ ] Verify exact privilege before escalation
[ ] Capture clean proof of access
[ ] Record tunnel command and route
[ ] Confirm remediation applies to root cause
[ ] Remove test artifacts where required</code></pre>

  <h3>Report days: become the consultant</h3>
  <p>Reserve protected time for writing and review, but draft throughout the exam. A practical rhythm is to write a finding immediately after stabilizing each major step, then polish the complete document near the end.</p>
  <p>A strong report has two audiences. Leadership needs the business meaning: what was exposed, how far an attacker could travel, and what should be fixed first. Technical staff need exact evidence, affected systems, reproduction steps, and remediation they can implement.</p>
  <p>For each finding, include:</p>
  <ol>
    <li>title and affected asset;</li>
    <li>severity with a defensible rationale;</li>
    <li>concise description of the underlying weakness;</li>
    <li>evidence and reproducible steps;</li>
    <li>impact in the context of the environment;</li>
    <li>root-cause remediation; and</li>
    <li>references where useful.</li>
  </ol>
  <p>Then write an attack narrative that connects the findings. A list of vulnerabilities says what was wrong. An attack chain explains why the combination mattered.</p>
  <figure class="cpts-figure">
    <img src="/uploads/2026/09/cpts/professional-reporting.png" alt="The researcher turning raw technical evidence into a professional report at sunrise." width="1672" height="941" loading="lazy" />
    <figcaption>The engagement is not finished when the shell lands. It is finished when another professional can understand, reproduce, and remediate the path.</figcaption>
  </figure>

  <h2>Energy management is part of the methodology</h2>
  <p>A multi-day exam encourages unhealthy bargaining: one more scan, one more payload, one more hour. Fatigue quietly destroys judgment. You reread the same output, mistype commands, and chase ideas you rejected earlier for good reasons.</p>
  <p>Set working blocks, meal breaks, and a sleep floor before the exam begins. End each session with a short handoff note to your future self:</p>
  <pre><code>Current access:
What changed today:
Best next hypothesis:
Commands/listeners to restart:
Evidence still missing:</code></pre>
  <p>The next morning, that note turns a cold start into a continuation.</p>

  <h2>Common preparation mistakes</h2>
  <h3>Collecting commands instead of building methodology</h3>
  <p>A huge cheatsheet is not useful if you cannot decide which command belongs to the current hypothesis. Organize notes by objective and decision point.</p>
  <h3>Treating enumeration as a one-time phase</h3>
  <p>Enumeration restarts after every foothold, privilege change, credential discovery, and pivot. The attack surface changes with your position.</p>
  <h3>Practicing single boxes only</h3>
  <p>Standalone machines teach exploitation. Chained environments teach memory, routing, credential tracking, and restraint. CPTS preparation needs both.</p>
  <h3>Leaving reporting until the end</h3>
  <p>Cold notes produce vague findings. Write while context is alive.</p>
  <h3>Measuring readiness by path completion</h3>
  <p>The progress bar measures coverage, not recall. Repeat assessments and explain the technique without the lesson open.</p>
  <h3>Ignoring current exam rules</h3>
  <p>Policies evolve. HackTheBox currently requires professional English-language documentation submitted through the exam dashboard and publishes specific rules on report format, retakes, and AI usage. In particular, do not paste exam data into public AI systems or use AI to generate the exam report. Read the current certification terms yourself before the attempt.</p>

  <h2>The final pre-exam checklist</h2>
  <h3>One week before</h3>
  <ul>
    <li>Freeze major tooling changes.</li>
    <li>Rehearse VPN, note, screenshot, and report workflows.</li>
    <li>Review weak modules and redo selected assessments.</li>
    <li>Test backup connectivity and local storage.</li>
    <li>Prepare a clean report skeleton and evidence naming scheme.</li>
    <li>Confirm the current official rules and submission format.</li>
  </ul>
  <h3>The day before</h3>
  <ul>
    <li>Update only what must be updated.</li>
    <li>Verify disk space, time synchronization, VPN, and essential tools.</li>
    <li>Prepare food, water, breaks, and sleep—not just commands.</li>
    <li>Stop studying early enough to begin rested.</li>
  </ul>
  <h3>Before submission</h3>
  <ul>
    <li>Confirm every required objective and current portal requirement.</li>
    <li>Check that each finding is reproducible from the report.</li>
    <li>Remove secrets that do not belong in the deliverable.</li>
    <li>Verify hostnames, IP addresses, figure numbers, and severity labels.</li>
    <li>Export to the required format and inspect the final file page by page.</li>
    <li>Remember that final submission ends the live attempt and cannot be replaced afterward; verify before clicking.</li>
  </ul>

  <h2>What stays after the badge</h2>
  <p>The most valuable result of CPTS preparation is not memorizing a particular privilege-escalation path. It is becoming calmer inside ambiguity.</p>
  <p>You learn that being stuck is not proof that you lack talent. It is a signal to reduce the problem: confirm access, inspect assumptions, restore the map, enumerate again. You learn that documentation is not separate from technical work; it is how technical work remains trustworthy. You learn that sleep can be a tactical decision and that a clean methodology beats bursts of inspiration.</p>
  <p>The exam may feel like a ten-day marathon, but it is won in the ordinary weeks before it—one carefully documented lab, one rebuilt tunnel, and one honest post-mortem at a time.</p>

  
  <aside><strong>Ethics and confidentiality:</strong> Practice only in systems you own or are explicitly authorized to test. Respect HackTheBox's certification terms and NDA. This guide intentionally omits exam-sensitive details.</aside>
</article>`,
};
