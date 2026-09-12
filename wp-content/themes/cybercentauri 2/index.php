<?php get_header(); ?>
<main class="cc-section cc-notes">
  <div class="cc-heading"><div><p class="cc-kicker">/ RESEARCH ARCHIVE</p><h2><?php bloginfo('name'); ?></h2></div></div>
  <div class="cc-posts">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <a class="cc-post" href="<?php the_permalink(); ?>"><span><?php echo esc_html(sprintf('%02d', get_the_ID() % 100)); ?></span><small><?php echo esc_html(get_the_category_list(' / ')); ?></small><h3><?php the_title(); ?></h3><time><?php echo esc_html(get_the_date('M Y')); ?></time><i>↗</i></a>
  <?php endwhile; else : ?><p>No field notes have been published yet.</p><?php endif; ?>
  </div>
</main>
<?php get_footer(); ?>
