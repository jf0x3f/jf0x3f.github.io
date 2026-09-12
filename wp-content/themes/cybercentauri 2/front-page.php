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
$email = get_theme_mod('cc_email', 'hello@cybercentauri.com');
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
                  <i></i>
                </p>
          <p class="cc-command"><span class="cc-prompt">└─$</span> cat mission.txt</p>
          <p class="cc-output">Document. Demystify. Defend.</p>
          <p class="cc-command"><span class="cc-prompt">└─$</span> ls ./focus</p>
          <div class="cc-terminal-grid"><span>web_security/</span><span>cloud/</span><span>labs/</span><span>edr/</span><span>cert_prep/</span><span>field_notes/</span></div>
          <p class="cc-command"><span class="cc-prompt">└─$</span> status --verbose</p>
          <div class="cc-progress"><b>KNOWLEDGE_BASE</b><i><span></span></i><em>ONLINE</em></div>
          <div class="cc-progress"><b>THREAT_LEVEL</b><i><span></span></i><em>LOW</em></div>
        </div>
      </div>
    </div>
    <div class="cc-focus"><span>[ ACTIVE MODULES ]</span><b>WEB_SEC</b><b>CLOUD</b><b>LABS</b><b>EDR</b><b>CERT_PREP</b><em>6 PROCESSES RUNNING</em></div>
  </section>

  <section class="cc-section cc-writeups" id="writeups">
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

  <section class="cc-section cc-contact" id="contact">
    <p class="cc-kicker">root@cc:~$ ./open-channel --encrypted</p>
    <div class="cc-two">
      <div>
        <div class="cc-signal"><i></i> PORT 443 / CHANNEL OPEN</div>
        <h2>Start a secure<br><span>conversation.</span></h2>
      </div>
      <div class="cc-contact-copy">
        <p>Share a research topic, a lab-learning question, or an idea for the next guide. Every responsible transmission gets read.</p>
        <a class="cc-email" href="mailto:<?php echo esc_attr($email); ?>"><span>mailto:</span><?php echo esc_html($email); ?><b>↗</b></a>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
