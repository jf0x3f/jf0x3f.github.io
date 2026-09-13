<?php
get_header();
$hero = get_theme_mod('cc_hero', 'Security research for the work that matters');
$intro = get_theme_mod('cc_intro', 'RESEARCH. PRACTICE. SECURE');
$legacy_intros = array(
  'CyberCentauri is a cybersecurity knowledge base for curious defenders, ethical learners, and people building sharper security instincts.',
  'Research. Practice. Secure.',
  'Research. Practice. Secure',
);
if (in_array(trim($intro), $legacy_intros, true)) {
  $intro = 'RESEARCH. PRACTICE. SECURE';
}
$email = get_theme_mod('cc_email', 'johnfiel15@gmail.com');
if (!$email || $email === 'hello@cybercentauri.com') {
  $email = 'johnfiel15@gmail.com';
}
$github_url = 'https://github.com/jf0x3a';
$linkedin_url = 'https://www.linkedin.com/in/john-fiel-brosas/';
$hero_lines = preg_split('/\r\n|\r|\n/', $hero);
$hero_primary = trim($hero_lines[0] ?? 'Security research');
$hero_secondary = trim($hero_lines[1] ?? '');
if (!$hero_secondary && rtrim($hero_primary, '.') === 'Security research for the work that matters') {
  $hero_primary = 'Security research';
  $hero_secondary = 'for the work that matters';
}
?>
<main id="top">
  <section class="cc-section cc-hero">
    <div class="cc-command-path uppercase"><span>visitor@cybercentauri</span>:<b>~/research</b>$ ./initialize.sh</div>
    <div class="cc-hero-grid">
      
      <div class="cc-terminal" aria-label="CyberCentauri system overview">
        <div class="cc-terminal-bar"><span><i></i><i></i><i></i></span><b>Terminal — visitor@cybercentauri: ~/research</b><em>×</em></div>
        <div class="cc-terminal-menu"><span>File</span><span>Edit</span><span>View</span><span>Search</span><span>Tabs</span><span>Help</span></div>
        <div class="cc-terminal-body">
          <p class="cc-command"><span class="cc-prompt">└─$</span> whoami</p>
          <p class="cc-terminal-ready-2 text-center text-4xl text-terminal-cyan!">
                  John Fiel "jf0x3a" Brosas
                  <!-- <i></i> -->
                </p>
          <p class="cc-command"><span class="cc-prompt">└─$</span> cat mission.txt</p>
          <p class="cc-output">Document. Demystify. Defend.</p>
          <p class="cc-command"><span class="cc-prompt">└─$</span> ls ./focus</p>
          <div class="cc-terminal-grid"><span>web_security/</span><span>cloud/</span><span>labs/</span><span>edr/</span><span>cert_prep/</span><span>field_notes/</span></div>
          <!-- <p class="cc-command"><span class="cc-prompt">└─$</span> status --verbose</p>
          <div class="cc-progress"><b>KNOWLEDGE_BASE</b><i><span></span></i><em>ONLINE</em></div>
          <div class="cc-progress"><b>THREAT_LEVEL</b><i><span></span></i><em>LOW</em></div> -->
          <div class="cc-terminal-output" id="cc-terminal-output" aria-live="polite" aria-label="Terminal command output"></div>
          <form class="cc-terminal-form" id="cc-terminal-form" autocomplete="off">
            <label for="cc-terminal-input"><span>┌──(visitor㉿cybercentauri)-[~/research]</span><b>└─$</b></label>
            <div class="cc-input-shell"><span class="cc-input-indicator" aria-hidden="true"></span><input id="cc-terminal-input" name="command" type="text" spellcheck="false" autocapitalize="none" aria-describedby="cc-terminal-hint" placeholder="type help" /></div>
            <button type="submit">RUN</button>
          </form>
          <p class="cc-terminal-hint" id="cc-terminal-hint">Try <code>help</code> · history <code>↑ ↓</code> · autocomplete <code>Tab</code></p>
        </div>
      </div>
    </div>
    <div class="cc-focus"><span>[ ACTIVE MODULES ]</span><b>WEB_SEC</b><b>CLOUD</b><b>LABS</b><b>EDR</b><b>CERT_PREP</b><em>6 PROCESSES RUNNING</em></div>
  </section>

  <section class="cc-section cc-profile cc-terminal-section" id="profile">
    <div class="cc-heading cc-profile-heading">
      <div>
        <p class="cc-kicker">root@cc:~$ cat /home/jf0x3a/operator-profile.yml</p>
        <h2>Operator <span>profile.</span></h2>
      </div>
      <span>[ CAPABILITIES / CREDENTIALS ]</span>
    </div>

    <div class="cc-profile-grid">
      <article class="cc-profile-card">
        <header><span>01 / STACK</span><i>LOADED</i></header>
        <h3>Programming languages</h3>
        <ul class="cc-skill-list">
          <li><span>PY</span><b>Python</b><i>available</i></li>
          <li><span>JS</span><b>JavaScript</b><i>available</i></li>
          <li><span>RB</span><b>Ruby</b><i>available</i></li>
          <li><span>PHP</span><b>PHP</b><i>available</i></li>
        </ul>
      </article>

      <article class="cc-profile-card">
        <header><span>02 / CAPABILITIES</span><i>ACTIVE</i></header>
        <h3>Technical skills</h3>
        <ul class="cc-capability-list">
          <li><span>01</span>Web Development</li>
          <li><span>02</span>Offensive Security</li>
          <li><span>03</span>Defensive Security</li>
          <li><span>04</span>Networking</li>
        </ul>
      </article>

      <article class="cc-profile-card cc-achievements">
        <header><span>03 / RECOGNITION</span><i>VERIFIED</i></header>
        <h3>Achievements</h3>
        <div class="cc-achievement-grid">
          <div class="cc-hof">
            <span>HALL OF FAME</span>
            <p>Recognized by the United Nations, World Health Organization, Siemens, MediaTek, SAP, Google, NASA, and more.</p>
          </div>
          <div class="cc-rank"><small>HACK THE BOX</small><strong>#5</strong><span>PHILIPPINES</span></div>
          <div class="cc-rank"><small>HACK THE BOX</small><strong>#400</strong><span>GLOBAL</span></div>
        </div>
      </article>

      <article class="cc-profile-card cc-certifications">
        <header><span>04 / CREDENTIALS</span><i>6 RECORDS</i></header>
        <h3>Certifications</h3>
        <ol class="cc-cert-list">
          <li><span>01</span><div><b>Certified Penetration Testing Specialist</b><small>Hack The Box</small></div></li>
          <li><span>02</span><div><b>Certified in Cybersecurity</b><small>ISC2</small></div></li>
          <li><span>03</span><div><b>Certified Web Penetration Tester</b><small>Appkademiya</small></div></li>
          <li><span>04</span><div><b>Cybersecurity Awareness Professional Certificate</b><small>Certiprof</small></div></li>
          <li><span>05</span><div><b>Certified Cybersecurity Educator Professional</b><small>RedTeam Leaders</small></div></li>
          <li><span>06</span><div><b>Certified Web Red Team Analyst</b><small>CyberWarFare Labs</small></div></li>
        </ol>
      </article>
    </div>
  </section>

  <section class="cc-section cc-writeups cc-terminal-section" id="writeups">
    <div class="cc-heading">
      <div>
        <p class="cc-kicker">root@cc:~$ ls ./writeups --sort=latest</p>
        <h2>Writeup <span>directories.</span></h2>
      </div>
      <span>[ AUTHORIZED LABS / CLEAR NOTES ]</span>
    </div>

    <div class="cc-writeup-intro">
      <p>Method-focused security writeups built around reconnaissance, validation, evidence, and remediation—enough direction to keep readers moving without turning the work into an answer dump.</p>
    </div>

    <div class="cc-sectors" aria-label="Writeup sectors">
      <div>
        <b><i>drwxr-xr-x</i> Hack The Box</b><span>./METHOD_NOTES</span>
        <p>Enumeration, validation, and remediation from authorized machines.</p>
      </div>
      <div>
        <b><i>drwxr-xr-x</i> TryHackMe</b><span>./LEARNING_PATHS</span>
        <p>Concept checkpoints and practical lab reflections.</p>
      </div>
      <div>
        <b><i>drwxr-xr-x</i> Certification prep</b><span>./STUDY_LAB_GUIDES</span>
        <p>Original practice flows focused on transferable skills.</p>
      </div>
    </div>

    <div class="cc-writeup-feed">
      <div class="cc-feed-heading">
        <p class="cc-kicker">tail -n 3 /var/log/transmissions.log</p>
        <span>WORDPRESS_PID: LIVE</span>
      </div>
      <div class="cc-posts">
        <?php
        $writeups = new WP_Query(array(
          'posts_per_page' => 3,
          'post_status' => 'publish',
        ));
        $position = 1;
        ?>
        <?php if ($writeups->have_posts()): ?>
          <?php while ($writeups->have_posts()):
            $writeups->the_post(); ?>
            <a class="cc-post" href="<?php the_permalink(); ?>">
              <span><?php echo esc_html(sprintf('%02d', $position++)); ?></span>
              <small>ORBIT / WRITEUP</small>
              <h3><?php the_title(); ?></h3>
              <time><?php echo esc_html(get_the_date('M Y')); ?></time>
              <i>↗</i>
            </a>
          <?php endwhile; ?>
          <?php wp_reset_postdata(); ?>
        <?php else: ?>
          <a class="cc-post" href="<?php echo esc_url(admin_url('post-new.php')); ?>">
            <span>01</span><small>ORBIT / READY</small>
            <h3>Publish your first writeup in WordPress</h3><time>NEW</time><i>↗</i>
          </a>
        <?php endif; ?>
      </div>
    </div>
  </section>

  <section class="cc-section cc-contact cc-terminal-section" id="contact">
    <p class="cc-kicker">root@cc:~$ ./open-channel --encrypted</p>
    <div class="cc-two">
      <div>
        <div class="cc-signal"><i></i> PORT 443 / CHANNEL OPEN</div>
        <h2>Start a secure<br><span>conversation.</span></h2>
      </div>
      <div class="cc-contact-copy">
        <p>Choose a channel for research discussions, security collaboration, or professional connections.</p>
        <div class="cc-contact-channels">
          <a class="cc-contact-link" href="mailto:<?php echo esc_attr($email); ?>">
            <span>01</span><div><small>EMAIL</small><b><?php echo esc_html($email); ?></b></div><em>DIRECT</em><i>↗</i>
          </a>
          <a class="cc-contact-link" href="<?php echo esc_url($github_url); ?>" target="_blank" rel="noopener noreferrer">
            <span>02</span><div><small>GITHUB</small><b>github.com/jf0x3a</b></div><em>CODE</em><i>↗</i>
          </a>
          <a class="cc-contact-link" href="<?php echo esc_url($linkedin_url); ?>" target="_blank" rel="noopener noreferrer">
            <span>03</span><div><small>LINKEDIN</small><b>john-fiel-brosas</b></div><em>NETWORK</em><i>↗</i>
          </a>
        </div>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
