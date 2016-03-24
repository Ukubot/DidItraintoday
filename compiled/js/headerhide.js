$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header").fadeOut();
    } else {
        $(".header").fadeIn();
    }
});
