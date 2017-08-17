**
 * Show Posts Category Featured Image as a cover image 
 *
 * Function gets category featured images for each posts as cover image.
 * HTML output of category featured image custom field
 * IF YOAST SEO plugin exists, Reorder the Category image to Show the Primary Category Image First.
 * Edited on GRIDLOVE Bloging Theme
 */


<div class="gridlove-cover-item">

<?php
 $cats = get_the_category();
 
   
    if ( class_exists('WPSEO_Primary_Term') ){
		
	         
			$wpseo_primary_term = new WPSEO_Primary_Term( 'category', get_the_id() );
		    $wpseo_primary_term = $wpseo_primary_term->get_primary_term();
		    $term = get_term( $wpseo_primary_term );
			
			if ( ! empty( $term ) && ! is_wp_error( $term ) ){
			
		$category_display = $term->name;
		$category_link = get_category_link( $term->term_id );
		$category_image = get_field('category_image',$term);
	   
	   	?>
<div class="gridlove-cover-bg">
    		<span class="gridlove-cover">
 <?php echo '<a href="'.$category_link.'" class="gridlove-cat gridlove-cat-'.$category_display.'"><img src="'.$category_image.'"/></a>'; ?>
                            <span class="gridlove-hidden-overlay"></span>
                        </span>  
        </div>
         <?php }} ?>
<?php if( $fimg = gridlove_get_featured_image('cover') ) : ?>
    	<div class="gridlove-cover-bg">
    		<span class="gridlove-cover">
             
        		<?php echo $fimg; ?>
        		<?php if( gridlove_get_option( 'single_fimg_cap' ) && $caption = get_post( get_post_thumbnail_id())->post_excerpt) : ?>
					<figure class="wp-caption-text"><?php echo wp_kses_post( $caption );  ?></figure>
				<?php endif; ?> 
        	</span>  
        </div>
	<?php endif; ?>  
</div>