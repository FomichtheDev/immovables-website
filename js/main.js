$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        navText: [ '', '' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });
});