var carouselMarket = $('.owl-carousel-market');

carouselMarket.owlCarousel({
    center: true,
    loop:true,
    margin:10,
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