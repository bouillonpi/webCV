$( document ).ready(function(){

    $(".button-collapse").sideNav();

});

$("#explore").click(function() {
    $('html, body').animate({
        scrollTop: $('#intro').offset().top - 40
    }, 800);
});