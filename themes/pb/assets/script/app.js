$( document ).ready(function(){

    $(".button-collapse").sideNav();

    $('.modal').modal();

    $('ul.tabs').tabs();

    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });

});

$("#home-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $('#home-intro').offset().top - 40
    }, 800);
});

$("#about-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $('#about-intro').offset().top - 40
    }, 800);
});

$(".backtotop").click(function() {
    $('html, body').animate({
        scrollTop: $('.nav-wrapper').offset().top
    }, 800);
});

$( ".locale-dropdown-trigger" ).click(function() {
    $( ".locale-dropdown" ).toggleClass("locale-dropdown-active");
});

// https://macarthur.me/typeit
// https://macarthur.me/typeit/docs
$('#typeWriteProfile-fr').typeIt({
    speed: 80,
    autoStart: false,
    breakLines: false,
    deleteDelay: 4500,
    loop: true,
    loopDelay: 4500,
    strings: [
        'Je joue souvent à PUBG <i class="fa fa-gamepad"></i>',
        'Je code des trucs <span class="css-badass">#BADA55</span> en <span class="css-css">#C55</span>',
        'Je promène mon chien Marty <i class="fa fa-dog"></i>',
        'J\'essaie d\'imiter l\'accent Canadien <i class="fab fa-canadian-maple-leaf"></i>',
        'J\'adore jouer aux Loups-Garous de Thiercelieux avec des amis <i class="fab fa-wolf-pack-battalion\n"></i>',
        'Je n\'arrive pas à faire ça : <i class="fa fa-hand-spock"></i>. Et toi ?',
        'J\'aime jouer au babyfoot <i class="fa fa-futbol"></i>'
    ]
});

$('#typeWriteProfile-en').typeIt({
    speed: 80,
    autoStart: false,
    breakLines: false,
    deleteDelay: 4500,
    loop: true,
    loopDelay: 4500,
    strings: [
        'I often play PUBG <i class="fa fa-gamepad"></i>',
        'I code <span class="css-badass">#BADA55</span> stuff in <span class="css-css">#C55</span>',
        'I walk my dog Marty <i class="fa fa-dog"></i>',
        'I love playing Werewolves of Miller Hollow with friends <i class="fab fa-wolf-pack-battalion\n"></i>',
        'I cannot do this: <i class="fa fa-hand-spock"></i>. You?',
        'I enjoy playing foosball <i class="fa fa-futbol"></i>'
    ]
});

$('#typeWriteAbout-fr').typeIt({
    speed: 80,
    autoStart: false,
    breakLines: false,
    deleteDelay: 4500,
    loop: true,
    loopDelay: 4500,
    strings: [
        'Je joue souvent à PUBG <i class="fa fa-gamepad"></i>',
        'Je code des trucs <span class="css-badass">#BADA55</span> en <span class="css-css">#C55</span>',
        'Je promène mon chien Marty <i class="fa fa-dog"></i>',
        'J\'essaie d\'imiter l\'accent Canadien <i class="fab fa-canadian-maple-leaf"></i>',
        'J\'adore jouer aux Loups-Garous de Thiercelieux avec des amis <i class="fab fa-wolf-pack-battalion\n"></i>',
        'Je n\'arrive pas à faire ça : <i class="fa fa-hand-spock"></i>. Et toi ?',
        'J\'aime jouer au babyfoot <i class="fa fa-futbol"></i>'
    ]
});

$('#typeWriteAbout-en').typeIt({
    speed: 80,
    autoStart: false,
    breakLines: false,
    deleteDelay: 4500,
    loop: true,
    loopDelay: 4500,
    strings: [
        'I often play PUBG <i class="fa fa-gamepad"></i>',
        'I code <span class="css-badass">#BADA55</span> stuff in <span class="css-css">#C55</span>',
        'I walk my dog Marty <i class="fa fa-dog"></i>',
        'I love playing Werewolves of Miller Hollow with friends <i class="fab fa-wolf-pack-battalion\n"></i>',
        'I cannot do this: <i class="fa fa-hand-spock"></i>. You?',
        'I enjoy playing foosball <i class="fa fa-futbol"></i>'
    ]
});