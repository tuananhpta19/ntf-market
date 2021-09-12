$('.owl-carousel')

var carouselEl = $('.owl-carousel');

carouselEl.owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
})

$(".btn-next").click(function() {
    carouselEl.trigger('next.owl.carousel');
});

$(".btn-prev").click(function() {
    carouselEl.trigger('prev.owl.carousel');
});