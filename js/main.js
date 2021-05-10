$(document).ready(function () {
    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     dots: true,
    //     //autoplay: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // })

    $('.bannerr-carousell').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.services-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
}); 



