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
  <aside class="cc-rail" aria-hidden="true"><span>CC / 26</span>
    <div class="cc-rail-line"></div><span>RESEARCH</span><span>IN ORBIT</span>
  </aside>
  <div class="cc-shell">
    <header class="cc-header">
      <a class="cc-brand" href="<?php echo esc_url(home_url('/')); ?>"><span
          class="cc-mark">C</span><span>CYBERCENTAURI<br><em>/ SECURITY ATLAS</em></span></a>
      <nav class="cc-nav" aria-label="Main navigation"><a href="#writeups"><b>01</b>Writeup Sectors</a><a
          href="#contact"><b>02</b>Contact</a>
      </nav>
    </header>
