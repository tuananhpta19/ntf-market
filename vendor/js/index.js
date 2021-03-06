var carouselMarket = $('.owl-carousel-market');

carouselMarket.owlCarousel({
    // center: true,
    // loop: true,
    margin: 9,
    autoWidth: true,
    // items:4
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        }
    }
})
$("#btn-next__market").click(function () {
    carouselMarket.trigger('next.owl.carousel');
});

$("#btn-prev__market").click(function () {
    carouselMarket.trigger('prev.owl.carousel');
});

var carouselEconomics = $('.owl-carousel-economics');

if (parseInt($(window).width()) < 992) {
    carouselEconomics.owlCarousel({
        loop: true,
        margin: 9,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            540: {
                items: 2
            },
            720: {
                item: 3
            }
        }
    })
} else {
    carouselEconomics.owlCarousel({
        margin: 9,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            540: {
                items: 2
            },
            720: {
                item: 3
            }
        }
    })
}


$("#btn-next__economics").click(function () {
    carouselEconomics.trigger('next.owl.carousel');
});

$("#btn-prev__economics").click(function () {
    carouselEconomics.trigger('prev.owl.carousel');
});
var carouselSquare = $('.owl-carousel-square');

carouselSquare.owlCarousel({
    // loop:true,
    // margin:10,
    // autoWidth: true,
    responsive: {
        0: {
            items: 1
        },
    }
})

$("#btn-next__nft__square").click(function () {
    carouselSquare.trigger('next.owl.carousel');
});

$("#btn-prev__nft__square").click(function () {
    carouselSquare.trigger('prev.owl.carousel');
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.back-to-top').removeClass("d-none");
        } else {
            $('.back-to-top').addClass("d-none");
        }
    });

    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 200);
    });

    $(".nav-bar-icon").click(() => {
        $(".side-bar__menu").addClass("side-bar-left");
        $(".side-bar__menu").removeClass("d-none");
    })
    $(".side-bar__menu").click(function () {
        $(".side-bar").click(function (e) {
            e.stopPropagation()
        })
        $(this).removeClass("side-bar-left");
        $(this).addClass("d-none");
    })

    $(".side-bar__menu").click(function () {
        $(this).removeClass("side-bar-left");
        $(this).addClass("d-none");
    })
    $(".side-bar-item li").click(function () {
        $(".side-bar__menu").removeClass("side-bar-left");
        $(".side-bar__menu").addClass("d-none");
    })
    $(".close-icon").click(function () {
        $(".side-bar__menu").removeClass("side-bar-left");
        $(".side-bar__menu").addClass("d-none");
    })
    $(".btn-side-bar__mobile").click(function(){
        $(".side-bar__menu").removeClass("side-bar-left");
        $(".side-bar__menu").addClass("d-none");
    })
    $(".header__logo__mobile").click(function(){
        $(".side-bar__menu").removeClass("side-bar-left");
        $(".side-bar__menu").addClass("d-none");
    })

})