$( document ).ready(function(){

    $(".button-collapse").sideNav();

    $('.modal').modal();

    lightbox.option({
        'resizeDuration': 0,
        'fadeDuration': 20,
        'disableScrolling': true,
        'wrapAround': true,
        'fitImagesInViewport': true,
        'albumLabel': "%1/%2",
        'scaleWidthPercentageForFitImageInViewport': 70
    })

});

$("#explore").click(function() {
    $('html, body').animate({
        scrollTop: $('#intro').offset().top - 40
    }, 800);
});