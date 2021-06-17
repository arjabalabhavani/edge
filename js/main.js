$(document).ready(function() {
    $('.bannerr-carousell').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.services-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    $('.mobile-nav-container').hide()
    $('.navbar-toggler').click(function() {
        $('.mobile-nav-container').fadeToggle(1000);
    });

    $("sub-hover-me").click(function() {
        $('.mobile-nav-container').hide();
    })
});