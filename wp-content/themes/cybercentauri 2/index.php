<?php
get_header();

$posts_page_id = (int) get_option('page_for_posts');
$archive_url = $posts_page_id ? get_permalink($posts_page_id) : home_url('/writeup/');
$categories = get_categories(array('hide_empty' => true));
$active_category_id = is_category() ? get_queried_object_id() : 0;
$archive_title = is_category() ? single_cat_title('', false) : 'Writeup archive';
$archive_description = is_category() ? category_description() : 'Practical security notes, authorized lab methodology, and defensive lessons—organized for fast retrieval.';
?>
<main class="cc-section cc-notes cc-archive">
  <header class="cc-archive-header">
    <div>
      <p class="cc-kicker">root@cc:~$ find ./writeups -type f</p>
      <h1><?php echo esc_html($archive_title); ?><span>.</span></h1>
      <?php if ($archive_description): ?>
        <div class="cc-archive-description"><?php echo wp_kses_post($archive_description); ?></div>
      <?php endif; ?>
    </div>
    <div class="cc-archive-summary" aria-label="Archive status">
      <span><i></i> INDEX ONLINE</span>
      <b><?php echo esc_html($GLOBALS['wp_query']->found_posts); ?></b>
      <small>FILES FOUND</small>
    </div>
  </header>

  <nav class="cc-category-filter" aria-label="Filter writeups by category">
    <span class="cc-filter-label">FILTER:</span>
    <a class="<?php echo $active_category_id === 0 ? 'is-active' : ''; ?>" href="<?php echo esc_url($archive_url); ?>">ALL</a>
    <?php foreach ($categories as $category): ?>
      <a class="<?php echo $active_category_id === $category->term_id ? 'is-active' : ''; ?>" href="<?php echo esc_url(get_category_link($category->term_id)); ?>">
        <?php echo esc_html($category->name); ?><small><?php echo esc_html($category->count); ?></small>
      </a>
    <?php endforeach; ?>
  </nav>

  <div class="cc-archive-posts">
    <?php if (have_posts()): ?>
      <?php $position = 1; ?>
      <?php while (have_posts()): the_post(); ?>
        <?php $post_categories = get_the_category(); ?>
        <article class="cc-archive-row">
          <span class="cc-row-number"><?php echo esc_html(sprintf('%02d', $position++)); ?></span>
          <div class="cc-row-categories">
            <?php if ($post_categories): ?>
              <?php foreach ($post_categories as $category): ?>
                <a href="<?php echo esc_url(get_category_link($category->term_id)); ?>"><?php echo esc_html($category->name); ?></a>
              <?php endforeach; ?>
            <?php else: ?>
              <span>UNCATEGORIZED</span>
            <?php endif; ?>
          </div>
          <a class="cc-row-title" href="<?php the_permalink(); ?>"><h2><?php the_title(); ?></h2></a>
          <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date('M d, Y')); ?></time>
          <a class="cc-row-open" href="<?php the_permalink(); ?>" aria-label="Read <?php echo esc_attr(get_the_title()); ?>">↗</a>
        </article>
      <?php endwhile; ?>
    <?php else: ?>
      <div class="cc-archive-empty"><span>404</span><p>No writeups found in this directory.</p></div>
    <?php endif; ?>
  </div>

  <?php
  the_posts_pagination(array(
    'mid_size' => 1,
    'prev_text' => '← PREV',
    'next_text' => 'NEXT →',
  ));
  ?>
</main>
<?php get_footer(); ?>
