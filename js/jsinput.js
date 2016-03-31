$('.main-background').scroll(function() {

    if ($(this).scrollTop()>20)
     {
        $('.header').fadeOut();
     }
    else
     {
      $('.header').fadeIn();
     }
});
