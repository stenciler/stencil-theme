
<!DOCTYPE html>
<html <?php language_attributes(); ?>><head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<title>
		<?php
		global $page, $paged;

		wp_title( '|', true, 'right' );

		bloginfo( 'name' );

		$site_description = get_bloginfo( 'description', 'display' );
		if ( $site_description && ( is_home() || is_front_page() ) )
			echo " | $site_description";
		if ( $paged >= 2 || $page >= 2 )
			echo ' | ' . sprintf( __( 'Page %s', 'matrix' ), max( $paged, $page ) );

		?></title>
		<link rel="profile" href="http://gmpg.org/xfn/11" />
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
		<?php wp_head(); ?>
	</head>
	<?php do_action('stencil_before_body'); ?>
	<body <?php body_class(); ?>>
		<?php do_action('stencil_before_main'); ?>
		<main class="ux-main">
			<?php
			echo stencil()->load_view()->render();
			?>
			
		</main>
		<?php do_action('stencil_after_main'); ?>
		<?php wp_footer(); ?>
	</body>
	<?php do_action('stencil_after_body'); ?>
	</html>
