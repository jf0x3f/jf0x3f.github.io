<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  <link rel="icon" href="<?php echo esc_url(get_template_directory_uri() . '/favicon.ico'); ?>" sizes="any">
  <link rel="icon" type="image/png" href="<?php echo esc_url(get_template_directory_uri() . '/favicon-512.png'); ?>" sizes="512x512">
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
  <aside class="cc-rail" aria-hidden="true"><span>TTY / 01</span>
    <div class="cc-rail-line"></div><span>ENCRYPTED</span><span>SESSION</span>
  </aside>
  <div class="cc-shell">
    <header class="cc-header">
      <a class="cc-brand" href="<?php echo esc_url(home_url('/')); ?>"><span
          class="cc-mark">&gt;_</span><span>CYBERCENTAURI<br><em>~/SECURITY_RESEARCH</em></span></a>
      <div class="cc-system-status" aria-label="System online"><i></i><span>SYS.ONLINE</span><time><?php echo esc_html(wp_date('H:i')); ?> SITE</time></div>
      <nav class="cc-nav" aria-label="Main navigation">
        <a href="<?php echo esc_url(home_url('/#writeups')); ?>">Writeup Sectors</a>
        <a href="<?php echo esc_url(home_url('/#contact')); ?>">Contact</a>
      </nav>
    </header>
