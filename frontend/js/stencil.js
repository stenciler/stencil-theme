/*****************************************
* OWL
*****************************************/
function owlAdjustHeight() {
	jQuery(".owl").each(function(index) {
		var instance = jQuery(this);
		var newHeight = instance.find('.owl-wrapper-outer').height();
		console.log(newHeight);
		instance.height(newHeight);
	});
}
jQuery(document).ready(function () {
	jQuery(".owl").each(function(index) {
		var items = 1;
		var autoPlay = true;
		var loop = true;
		var navigation = false;
		var pagination = false;
		var instance = jQuery(this);
		if(typeof instance.data('items') !== 'undefined')
		{
			var items =  instance.data('items');
		}
		if(typeof instance.data('autoplay') !== 'undefined')
		{
			var autoplay =  true;
		}
		if(typeof instance.data('loop') !== 'undefined')
		{
			var loop =  true;
		}
		if(typeof instance.data('navigation') !== 'undefined')
		{
			var navigation =  true;
		}
		if(typeof instance.data('pagination') !== 'undefined')
		{
			var pagination =  true;
		}
	
		instance.children('.items').owlCarousel({
			items: items,
			autoPlay: autoPlay,
			loop:true,
			smartSpeed :900,
			pagination: pagination,
			navigation:navigation,
			afterInit: owlAdjustHeight,
			navigationigationText: [
			"<i class='fa fa-chevron-left'></i>",
			"<i class='fa fa-chevron-right'></i>"
			]
		});
	});
});  
 
/*****************************************
* ISOTOPE
*****************************************/
jQuery(document).ready(function () {
	var jQuerycollectionIsotope = jQuery('.collection-isotope > .items').isotope({
		itemSelector: '.item'
	});
	jQuery('.collection-isotope > .filters').on( 'click', 'a', function() {
		var filterValue = jQuery( this ).attr('data-filter');
		filterValue = filterFns[ filterValue ] || filterValue;
		jQuerycollectionIsotope.isotope({ filter: filterValue });
	});
}); 

/*****************************************
* SWIPER
*****************************************/
jQuery(document).ready(function () {
	var modSwiper =  new Swiper('.swiper_standard', {
		navigationigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
	});
}); 
