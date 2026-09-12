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
?>
<main id="top">
  <section class="cc-section cc-hero">
    <div class="cc-signal"><i></i> SIGNAL: RESEARCH TRANSMISSION LIVE</div>
    <div class="cc-hero-grid">
      <div>
        <h1>
          <?php echo esc_html($hero_lines[0] ?? 'Security research'); ?><br><span><?php echo esc_html($hero_lines[1] ?? 'for the work that matters'); ?></span>
        </h1>
        <p class="cc-lede"><?php echo esc_html($intro); ?></p>
        <div class="cc-actions">
          <a class="cc-button cc-primary" href="#writeups">Explore writeups <span>↗</span></a>
          <a class="cc-button cc-text" href="#contact">Contact <span>↗</span></a>
        </div>
      </div>
      <div class="cc-orbit-stage" aria-hidden="true">
        <div class="cc-orbit"><i></i></div>
        <div class="cc-orbit two"><i></i></div>
        <div class="cc-planet"><b>CC</b></div>
      </div>
    </div>
    <div class="cc-focus"><span>FOCUS AREAS</span><b>WEB</b><b>CLD</b><b>LAB</b><b>EDR</b><b>CERT</b></div>
  </section>

  <section class="cc-section cc-writeups" id="writeups">
    <div class="cc-heading">
      <div>
        <p class="cc-kicker">/ 01 — WRITEUP SECTORS</p>
        <h2>Writeup <span>Sectors.</span></h2>
      </div>
      <span>AUTHORIZED LABS / CLEAR NOTES</span>
    </div>

    <div class="cc-writeup-intro">
      <p>Method-focused security writeups built around reconnaissance, validation, evidence, and remediation—enough direction to keep readers moving without turning the work into an answer dump.</p>
    </div>

    <div class="cc-sectors" aria-label="Writeup sectors">
      <div>
        <b>Hack The Box</b><span>METHOD NOTES</span>
        <p>Enumeration, validation, and remediation from authorized machines.</p>
      </div>
      <div>
        <b>TryHackMe</b><span>LEARNING PATHS</span>
        <p>Concept checkpoints and practical lab reflections.</p>
      </div>
      <div>
        <b>Certification prep</b><span>STUDY LAB GUIDES</span>
        <p>Original practice flows focused on transferable skills.</p>
      </div>
    </div>

    <div class="cc-writeup-feed">
      <div class="cc-feed-heading">
        <p class="cc-kicker">LATEST TRANSMISSIONS</p>
        <span>WORDPRESS / LIVE</span>
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
    <p class="cc-kicker">/ 02 — CONTACT</p>
    <div class="cc-two">
      <div>
        <div class="cc-signal"><i></i> TRANSMISSION CHANNEL OPEN</div>
        <h2>Have a hard<br><span>question?</span></h2>
      </div>
      <div class="cc-contact-copy">
        <p>Share a research topic, a lab-learning question, or an idea for the next guide. Every responsible transmission gets read.</p>
        <a class="cc-email" href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?><span>↗</span></a>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
