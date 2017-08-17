**
 * Get post categories
 *
 * Function gets categories for current post and displays and slightly modifies
 * HTML output of category list so we can have category id in class parameter
 * IF YOAST SEO plugin exists, Reorder the Category labels to Show the Primary Category First.
 * Edited on GRIDLOVE Bloging Theme
 */



if ( !function_exists( 'gridlove_get_category' ) ):
	function gridlove_get_category() {

		$output = '';
		$cats = get_the_category();
		$useCatLink = true;
		if ($cats){
	
		if ( class_exists('WPSEO_Primary_Term') ){	
		$category_display = '';
	     $category_link = '';
			
		$wpseo_primary_term = new WPSEO_Primary_Term( 'category', get_the_id() );
		$wpseo_primary_term = $wpseo_primary_term->get_primary_term();
		$term = get_term( $wpseo_primary_term );
		if (is_wp_error($term)) { 
		foreach ( $cats as $k => $cat ) {
	     
			echo '<a href="'.esc_url( get_category_link( $cat->term_id ) ).'" class="gridlove-cat gridlove-cat-'.$cat->term_id.'">'.$cat->name.'</a>';
		}
		return wp_kses_post( $output );
		
		
		} else {
			$category_display = $term->name;
			$category_link = get_category_link( $term->term_id );
			echo '<a href="'.$category_link.'" class="gridlove-cat gridlove-cat-'.$category_display.'">'.$category_display.'</a>';
			foreach ( $cats as $k => $cat ) {
				$link = get_category_link( $cat->term_id );
				$title = $cat->name;
				if ($category_link !== $link)
				{
			echo '<a href="'.esc_url( get_category_link( $cat->term_id ) ).'" class="gridlove-cat gridlove-cat-'.$cat->term_id.'">'.$cat->name.'</a>';
				}
			}
			return wp_kses_post( $output );
			
		}
		} else {
			foreach ( $cats as $k => $cat ) {
			$category_display = $cats->name;
		$category_link = get_category_link( $cats->term_id );
		echo '<a href="'.$category_link.'" class="gridlove-cat gridlove-cat-'.$category_display.'">'.$category_display.'</a>';
			}
				
		}
		
		
	    
	
	   
	
	
}
	
		
		
	}
endif;