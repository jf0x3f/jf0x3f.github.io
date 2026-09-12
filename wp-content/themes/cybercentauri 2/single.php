<?php get_header(); ?>
<main class="cc-section cc-article-wrap">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
  <article class="cc-article">
    <header>
      <p class="cc-kicker">/ WRITEUP — <?php echo esc_html(get_the_date('Y.m.d')); ?></p>
      <h1><?php the_title(); ?></h1>
      <div class="cc-article-meta"><span>CYBERCENTAURI</span><span>WRITEUP GUIDE</span><span><?php echo esc_html(get_the_date('M Y')); ?></span></div>
    </header>
    <div class="cc-article-body"><?php the_content(); ?></div>
    <footer class="cc-article-footer"><a class="cc-arrow" href="<?php echo esc_url(home_url('/#writeups')); ?>">← Back to writeup sectors</a></footer>
  </article>
<?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>
