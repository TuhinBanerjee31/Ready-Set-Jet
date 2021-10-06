$(document).ready(function() {
    $(".color").keyup(function() {
        var color = $('.color').val()
        $(".text").css('color', color);
        $(".button").css('color', color);
        $(".button").css('border', '2px solid ' + color + '');
    });
    $(".background").keyup(function() {
        var background = $('.background').val()
        $(".overlay").css('background', background);
    });
});

// TESTIMONIALS
jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});