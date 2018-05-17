<footer class="ux-footer">
  <div class="container">
    <nav class="navbar navbar-expand-lg ">
      <?php
      $logo_img = get_option('site_footer');
      if(!$logo_img) {
        $logo_img = get_stylesheet_directory_uri().'/assets/img/logo.png';
      }
      ?>
      <a class="logo navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
        <img src="<?php echo $logo_img; ?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>">
      </a>
      {{#menu}}footer_menu{{/menu}}
    </nav>
  </div>
</footer>
