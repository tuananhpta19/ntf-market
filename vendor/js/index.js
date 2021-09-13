var carouselMarket = $('.owl-carousel-market');

carouselMarket.owlCarousel({
    // center: true,
    loop:true,
    margin:9,
    autoWidth:true,
    items:4
    // responsive:{
    //     600:{
    //         items:4
    //     }
    // }
})

$(".btn-next").click(function() {
    carouselMarket.trigger('next.owl.carousel');
});

$(".btn-prev").click(function() {
    carouselMarket.trigger('prev.owl.carousel');
});

var carouselEconomics = $('.owl-carousel-economics');

carouselEconomics.owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:3
        }
    }
})

$(".btn-next").click(function() {
    carouselEconomics.trigger('next.owl.carousel');
});

$(".btn-prev").click(function() {
    carouselEconomics.trigger('prev.owl.carousel');
});
var carouselSquare = $('.owl-carousel-square');

carouselSquare.owlCarousel({
    // loop:true,
    // margin:10,
    // autoWidth: true,
    responsive:{
        0:{
            items:1
        }
    }
})

$(".btn-next").click(function() {
    carouselSquare.trigger('next.owl.carousel');
});

$(".btn-prev").click(function() {
    carouselSquare.trigger('prev.owl.carousel');
});

$(document).ready(function(){

})