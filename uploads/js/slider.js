
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            focusOnSelect: true
        });

        $('a[data-slide]').click(function (e) {
            e.preventDefault();
            var slideno = $(this).data('slide');
            $('.slider-nav').slick('slickGoTo', slideno - 1);
        });

        /*slider two*/
        jQuery(document).ready(function($) {
            "use strict";
            $('#customers-testimonials').owlCarousel( {
                    loop: true,
                    center: true,
                    items: 5,
                    margin: 30,
                    autoplay: true,
                    dots:true,
                nav:true,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                  navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        1170: {
                            items: 5
                        }
                    }
                });
            });