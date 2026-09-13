(() => {
  'use strict';

  const form = document.getElementById('cc-terminal-form');
  const input = document.getElementById('cc-terminal-input');
  const output = document.getElementById('cc-terminal-output');

  if (!form || !input || !output) return;

  document.documentElement.classList.add('cc-js');

  const sections = new Map([
    ['profile', document.getElementById('profile')],
    ['writeups', document.getElementById('writeups')],
    ['contact', document.getElementById('contact')],
  ]);
  const aliases = new Map([
    ['skills', 'profile'],
    ['capabilities', 'profile'],
    ['achievements', 'profile'],
    ['certifications', 'profile'],
    ['certs', 'profile'],
    ['work', 'writeups'],
    ['posts', 'writeups'],
    ['blog', 'writeups'],
    ['socials', 'contact'],
    ['email', 'contact'],
    ['github', 'contact'],
    ['linkedin', 'contact'],
  ]);
  const commandNames = [
    'help', 'ls', 'profile', 'skills', 'achievements', 'certifications',
    'writeups', 'contact', 'socials', 'all', 'home', 'clear', 'whoami', 'pwd',
  ];
  const commandHistory = [];
  let historyIndex = 0;

  function setSectionVisibility(section, visible) {
    if (!section) return;
    section.hidden = !visible;
    section.setAttribute('aria-hidden', visible ? 'false' : 'true');
    if (visible) {
      section.classList.remove('cc-section-enter');
      requestAnimationFrame(() => section.classList.add('cc-section-enter'));
    }
  }

  function appendOutput(command, message, type = 'success') {
    const entry = document.createElement('div');
    entry.className = `cc-terminal-line is-${type}`;

    if (command) {
      const commandLine = document.createElement('span');
      commandLine.textContent = `└─$ ${command}`;
      entry.appendChild(commandLine);
    }

    const response = document.createElement('p');
    response.textContent = message;
    entry.appendChild(response);
    output.appendChild(entry);

    while (output.children.length > 6) output.firstElementChild.remove();
    output.scrollTop = output.scrollHeight;
  }

  function revealSection(name, shouldScroll = true) {
    const resolvedName = aliases.get(name) || name;
    const section = sections.get(resolvedName);
    if (!section) return false;

    setSectionVisibility(section, true);
    if (shouldScroll) {
      history.replaceState(null, '', `#${resolvedName}`);
      window.setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
    return resolvedName;
  }

  function hideAllSections() {
    sections.forEach((section) => setSectionVisibility(section, false));
  }

  function runCommand(rawCommand) {
    const normalized = rawCommand.trim().toLowerCase().replace(/^\.\//, '');
    if (!normalized) return;

    commandHistory.push(rawCommand.trim());
    historyIndex = commandHistory.length;

    const parts = normalized.split(/\s+/);
    const command = ['show', 'open', 'cd'].includes(parts[0]) && parts[1] ? parts[1] : parts[0];

    if (command === 'clear') {
      output.replaceChildren();
      return;
    }

    if (command === 'help' || command === '--help') {
      appendOutput(rawCommand, 'Commands: profile, writeups, contact, all, home, ls, whoami, pwd, clear');
      return;
    }

    if (command === 'ls') {
      appendOutput(rawCommand, 'profile/  writeups/  contact/');
      return;
    }

    if (command === 'whoami') {
      appendOutput(rawCommand, 'John Fiel "jf0x3a" Brosas');
      return;
    }

    if (command === 'pwd') {
      appendOutput(rawCommand, '/home/visitor/cybercentauri');
      return;
    }

    if (command === 'all') {
      sections.forEach((section) => setSectionVisibility(section, true));
      appendOutput(rawCommand, 'All homepage modules mounted.');
      return;
    }

    if (command === 'home' || command === 'exit') {
      hideAllSections();
      history.replaceState(null, '', window.location.pathname);
      document.querySelector('.cc-hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      appendOutput(rawCommand, 'Modules unmounted. Terminal workspace active.');
      return;
    }

    const revealed = revealSection(command);
    if (revealed) {
      appendOutput(rawCommand, `${revealed}/ mounted successfully.`);
      return;
    }

    appendOutput(rawCommand, `command not found: ${command}. Type "help" for available commands.`, 'error');
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const command = input.value;
    input.value = '';
    runCommand(command);
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && commandHistory.length) {
      event.preventDefault();
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = commandHistory[historyIndex];
    } else if (event.key === 'ArrowDown' && commandHistory.length) {
      event.preventDefault();
      historyIndex = Math.min(commandHistory.length, historyIndex + 1);
      input.value = historyIndex === commandHistory.length ? '' : commandHistory[historyIndex];
    } else if (event.key === 'Tab') {
      const partial = input.value.trim().toLowerCase();
      const matches = commandNames.filter((name) => name.startsWith(partial));
      if (matches.length) {
        event.preventDefault();
        input.value = matches[0];
      }
    }
  });

  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetName = link.hash.slice(1);
      if (!sections.has(targetName)) return;
      event.preventDefault();
      revealSection(targetName);
      appendOutput('', `${targetName}/ mounted from navigation.`);
    });
  });

  hideAllSections();
  const initialSection = window.location.hash.slice(1);
  if (sections.has(initialSection)) {
    revealSection(initialSection, false);
    requestAnimationFrame(() => sections.get(initialSection).scrollIntoView({ block: 'start' }));
  }

  appendOutput('', 'Interactive shell ready. Type "help" to list commands.');
})();
