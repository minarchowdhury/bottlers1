
(function($){
	$(function(){

        
        $('.phone-nav').click(function () {
            $("body").toggleClass("navshown");
            $(".nav-wrap").slideToggle(500)
        });
        
        
        if ($('.creat-item-inner').length) {
            $('.creat-item-inner').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.creat-item-inner').slick('resize');
            });
        }
        
        
        if ($('.products-item-wrap').length) {
            $('.products-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.products-item-wrap').slick('resize');
            });
        }
        
        
        if ($('.equipment-thumb-inner').length) {
            $('.equipment-thumb-inner').slick({
                arrows:false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 4300,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                variableWidth: false,
            })
            
            $(window).on('resize', function () {
                $('.equipment-thumb-inner').slick('resize');
            });
        }
        
       
		
	})// End ready function.
   
	

})(jQuery)

