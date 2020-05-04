$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        navText: [ '', '' ],

        responsive:{
            0:{
                items:1
            },

            768:{
                items:2
            },

            1000:{
                items:3
            }
        }
    });
        $(".navbar-nav").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'), top = $(id).offset().top - 100;
            $('body,html').animate({scrollTop: top}, 1500);
        });
        $(".scrolltop").on("click", function (event) {
            event.preventDefault();
               let top = -$(this).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
        $(".switcher span.month").on("click" ,function () {
            $(".switcher span").removeClass("active");
            $(this).addClass("active");
            $(".choose_table .item span.time").html("Monthly");
            $(".choose_table .item:first-of-type span.price").html("$50");
            $(".choose_table .item:nth-child(2) span.price").html("$150");
            $(".choose_table .item:last-of-type span.price").html("$250");
        });
        $(".switcher span.year").on("click" ,function () {
            $(".switcher span").removeClass("active");
            $(this).addClass("active");
            $(".choose_table .item span.time").html("Per year");
            $(".choose_table .item:first-of-type span.price").html("$500");
            $(".choose_table .item:nth-child(2) span.price").html("$1500");
            $(".choose_table .item:last-of-type span.price").html("$2500");
        })
});