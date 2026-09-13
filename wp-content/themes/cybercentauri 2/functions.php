<?php
if (!defined('ABSPATH')) {
    exit;
}

function cybercentauri_setup()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    register_nav_menus(array('primary' => __('Primary navigation', 'cybercentauri')));
}
add_action('after_setup_theme', 'cybercentauri_setup');

function cybercentauri_assets()
{
    $theme_version = wp_get_theme()->get('Version');
    $tailwind_path = get_template_directory() . '/assets/css/tailwind.css';
    $terminal_path = get_template_directory() . '/assets/js/terminal.js';

    wp_enqueue_style('cybercentauri', get_stylesheet_uri(), array(), $theme_version);

    if (file_exists($tailwind_path)) {
        wp_enqueue_style(
            'cybercentauri-tailwind',
            get_template_directory_uri() . '/assets/css/tailwind.css',
            array('cybercentauri'),
            (string) filemtime($tailwind_path)
        );
    }

    if (file_exists($terminal_path)) {
        wp_enqueue_script(
            'cybercentauri-terminal',
            get_template_directory_uri() . '/assets/js/terminal.js',
            array(),
            (string) filemtime($terminal_path),
            true
        );
        wp_script_add_data('cybercentauri-terminal', 'strategy', 'defer');
    }
}
add_action('wp_enqueue_scripts', 'cybercentauri_assets');

function cybercentauri_customize($customizer)
{
    $customizer->add_section('cc_home', array('title' => __('CyberCentauri homepage', 'cybercentauri'), 'priority' => 30));
    $fields = array(
        'cc_hero' => array('Hero headline', "Security research for the work that matters."),
        'cc_intro' => array('Hero introduction', 'RESEARCH. PRACTICE. SECURE'),
        'cc_email' => array('Contact email', 'johnfiel15@gmail.com'),
    );
    foreach ($fields as $id => $field) {
        $customizer->add_setting($id, array('default' => $field[1], 'sanitize_callback' => $id === 'cc_email' ? 'sanitize_email' : 'sanitize_textarea_field'));
        $customizer->add_control($id, array('label' => __($field[0], 'cybercentauri'), 'section' => 'cc_home', 'type' => $id === 'cc_intro' || $id === 'cc_hero' ? 'textarea' : 'email'));
    }
}
add_action('customize_register', 'cybercentauri_customize');

function cybercentauri_seo_description()
{
    if (is_front_page() || is_home()) {
        return 'CyberCentauri publishes concise cybersecurity research, ethical hacking lab writeups, defensive lessons, and practical security methodology.';
    }

    if (is_singular('post')) {
        return sprintf(
            '%s: a concise cybersecurity guide with practical methodology, readable commands, defensive context, and sensitive details redacted.',
            wp_strip_all_tags(get_the_title())
        );
    }

    if (is_category()) {
        return sprintf(
            '%s security writeups from CyberCentauri, focused on practical methodology, responsible research, and defensive lessons.',
            single_cat_title('', false)
        );
    }

    if (is_singular()) {
        $summary = has_excerpt() ? get_the_excerpt() : wp_strip_all_tags(get_post_field('post_content', get_queried_object_id()));
        if ($summary) {
            return wp_trim_words($summary, 24, '…');
        }
    }

    return 'CyberCentauri is a cybersecurity research and writeup knowledge base for ethical learners and responsible defenders.';
}

function cybercentauri_document_title_parts($parts)
{
    if (is_front_page() || is_home()) {
        $parts['title'] = 'CyberCentauri';
        $parts['tagline'] = 'Cybersecurity Research & HTB Writeups';
    }

    return $parts;
}
add_filter('document_title_parts', 'cybercentauri_document_title_parts');

function cybercentauri_document_title_separator()
{
    return '|';
}
add_filter('document_title_separator', 'cybercentauri_document_title_separator');

function cybercentauri_canonical_url()
{
    if (is_front_page() || is_home()) {
        return home_url('/');
    }

    if (is_singular()) {
        return get_permalink();
    }

    if (is_category()) {
        return get_category_link(get_queried_object_id());
    }

    if (is_tag()) {
        return get_tag_link(get_queried_object_id());
    }

    return '';
}

remove_action('wp_head', 'rel_canonical');

function cybercentauri_seo_meta()
{
    if (is_search() || is_404()) {
        return;
    }

    $title = wp_get_document_title();
    $description = cybercentauri_seo_description();
    $canonical = cybercentauri_canonical_url();
    $image = get_template_directory_uri() . '/favicon-512.png';

    if (is_singular() && has_post_thumbnail(get_queried_object_id())) {
        $featured_image = get_the_post_thumbnail_url(get_queried_object_id(), 'full');
        if ($featured_image) {
            $image = $featured_image;
        }
    }
    ?>
    <meta name="description" content="<?php echo esc_attr($description); ?>">
    <meta name="theme-color" content="#080a0b">
    <?php if ($canonical) : ?>
    <link rel="canonical" href="<?php echo esc_url($canonical); ?>">
    <?php endif; ?>
    <meta property="og:locale" content="<?php echo esc_attr(get_locale()); ?>">
    <meta property="og:type" content="<?php echo is_singular('post') ? 'article' : 'website'; ?>">
    <meta property="og:site_name" content="CyberCentauri">
    <meta property="og:title" content="<?php echo esc_attr($title); ?>">
    <meta property="og:description" content="<?php echo esc_attr($description); ?>">
    <?php if ($canonical) : ?>
    <meta property="og:url" content="<?php echo esc_url($canonical); ?>">
    <?php endif; ?>
    <meta property="og:image" content="<?php echo esc_url($image); ?>">
    <meta property="og:image:alt" content="CyberCentauri security research mark">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="<?php echo esc_attr($title); ?>">
    <meta name="twitter:description" content="<?php echo esc_attr($description); ?>">
    <meta name="twitter:image" content="<?php echo esc_url($image); ?>">
    <?php if (is_singular('post')) : ?>
    <meta property="article:published_time" content="<?php echo esc_attr(get_the_date(DATE_W3C)); ?>">
    <meta property="article:modified_time" content="<?php echo esc_attr(get_the_modified_date(DATE_W3C)); ?>">
    <?php endif;
}
add_action('wp_head', 'cybercentauri_seo_meta', 2);

function cybercentauri_structured_data()
{
    if (is_search() || is_404()) {
        return;
    }

    $home = home_url('/');
    $organization_id = $home . '#organization';
    $logo = get_template_directory_uri() . '/favicon-512.png';

    if (is_front_page() || is_home()) {
        $schema = array(
            '@context' => 'https://schema.org',
            '@graph' => array(
                array(
                    '@type' => 'Organization',
                    '@id' => $organization_id,
                    'name' => 'CyberCentauri',
                    'url' => $home,
                    'sameAs' => array(
                        'https://github.com/jf0x3a',
                        'https://www.linkedin.com/in/john-fiel-brosas/',
                    ),
                    'logo' => array(
                        '@type' => 'ImageObject',
                        'url' => $logo,
                        'width' => 512,
                        'height' => 512,
                    ),
                ),
                array(
                    '@type' => 'WebSite',
                    '@id' => $home . '#website',
                    'url' => $home,
                    'name' => 'CyberCentauri',
                    'description' => cybercentauri_seo_description(),
                    'publisher' => array('@id' => $organization_id),
                    'inLanguage' => get_bloginfo('language'),
                ),
            ),
        );
    } elseif (is_singular('post')) {
        $post_id = get_queried_object_id();
        $categories = wp_get_post_categories($post_id, array('fields' => 'names'));
        $tags = wp_get_post_tags($post_id, array('fields' => 'names'));
        $image = has_post_thumbnail($post_id) ? get_the_post_thumbnail_url($post_id, 'full') : $logo;
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'BlogPosting',
            '@id' => get_permalink($post_id) . '#article',
            'headline' => get_the_title($post_id),
            'description' => cybercentauri_seo_description(),
            'url' => get_permalink($post_id),
            'mainEntityOfPage' => get_permalink($post_id),
            'datePublished' => get_the_date(DATE_W3C, $post_id),
            'dateModified' => get_the_modified_date(DATE_W3C, $post_id),
            'inLanguage' => get_bloginfo('language'),
            'image' => array($image),
            'author' => array(
                '@type' => 'Organization',
                'name' => 'CyberCentauri',
                'url' => $home,
            ),
            'publisher' => array(
                '@type' => 'Organization',
                '@id' => $organization_id,
                'name' => 'CyberCentauri',
                'logo' => array('@type' => 'ImageObject', 'url' => $logo),
            ),
            'articleSection' => $categories,
            'keywords' => $tags,
        );
    } else {
        return;
    }

    echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_UNICODE) . '</script>';
}
add_action('wp_head', 'cybercentauri_structured_data', 3);

function cybercentauri_robots($robots)
{
    if (is_search() || is_404()) {
        $robots['noindex'] = true;
        unset($robots['index']);
    } else {
        $robots['index'] = true;
        $robots['follow'] = true;
        unset($robots['noindex'], $robots['nofollow']);
    }

    $robots['max-image-preview'] = 'large';
    $robots['max-snippet'] = '-1';
    $robots['max-video-preview'] = '-1';

    return $robots;
}
add_filter('wp_robots', 'cybercentauri_robots');
