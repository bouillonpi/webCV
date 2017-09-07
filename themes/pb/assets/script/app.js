$( document ).ready(function(){

    $(".button-collapse").sideNav();

    $('.modal').modal();

    $('ul.tabs').tabs();

    $('.tooltipped').tooltip({
        delay: 50,
        position: 'bottom',
        html: true
    });

    $('.collapsible').collapsible();

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

// https://macarthur.me/typeit
// https://macarthur.me/typeit/docs
$('#typeWriteHome-fr').typeIt({
    speed: 80,
    autoStart: false,
    breakLines: false,
    deleteDelay: 4500,
    loop: true,
    loopDelay: 4500,
    strings: [
        'Je vis à <i class="fa fa-tachometer"></i> 100 km/h !',
        'Je pratique le Kung Fu et le Karaté <i class="fa fa-hand-rock-o"></i>',
        'Je fais de la détection de métaux <i class="fa fa-magnet"></i>',
        'Je suis mauvais à League of Legends <i class="fa fa-thumbs-o-down"></i>',
        'Je fais des blagues bien nulles <i class="fa fa-meh-o"></i>',
        'Je suis le caméraman du youtuber ZeratoR <i class="fa fa-camera"></i>',
        'Je n\'arrive pas à faire ça : <i class="fa fa-hand-spock-o"></i>'
    ]
});

$('#typeWriteHome-en').typeIt({
    speed: 80,
    autoStart: false,
    breakLines: false,
    deleteDelay: 4500,
    loop: true,
    loopDelay: 4500,
    strings: [
        'I am living a <i class="fa fa-tachometer"></i> fast-paced life!',
        'I practice Kung Fu and Karate <i class="fa fa-hand-rock-o"></i>',
        'I like to do metal detecting in France <i class="fa fa-magnet"></i>',
        'I\'m a noob League of Legends player <i class="fa fa-thumbs-o-down"></i>',
        'My jokes are rarely funny<i class="fa fa-meh-o"></i>',
        'I am the cameraman of the French youtuber ZeratoR <i class="fa fa-camera"></i>',
        'I cannot do this: <i class="fa fa-hand-spock-o"></i>'
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
        'Je pratique le Kung Fu et le Karaté <i class="fa fa-hand-rock-o"></i>',
        'Je fais des trucs <span class="css-badass">#BADA55</span> en <span class="css-css">#C55</span>',
        'Je prends des photos risquées au Grand Canyon',
        'Je suis mauvais à League of Legends <i class="fa fa-thumbs-o-down"></i> </br>(Pourtant je tryhard)',
        'Je fais des blagues bien nulles <i class="fa fa-meh-o"></i>',
        'Je suis le caméraman du youtuber ZeratoR <i class="fa fa-camera"></i>',
        'Je n\'arrive pas à faire ça : <i class="fa fa-hand-spock-o"></i>',
        'J\'ai essayé de comprendre Prolog. Sans succès...',
        'J\'adore jouer aux Loups-Garous de Thiercelieux avec des amis',
        'Record personnel de Rubik\'s Cube : <i class="fa fa-clock-o"></i> 38s',
        'Je fais de la détection de métaux <i class="fa fa-magnet"></i>'
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
        'I practice Kung Fu and Karate <i class="fa fa-hand-rock-o"></i>',
        'I code <span class="css-badass">#BADA55</span> stuff in <span class="css-css">#C55</span>',
        'I take risky pictures at the Grand Canyon',
        'I\'m a noob League of Legends player <i class="fa fa-thumbs-o-down"></i> </br>(Yet I tryhard)',
        'My jokes are rarely funny <i class="fa fa-meh-o"></i>',
        'I am the cameraman of the French youtuber ZeratoR <i class="fa fa-camera"></i>',
        'I cannot do this: <i class="fa fa-hand-spock-o"></i>',
        'I tried to understand Prolog. Many times. Without success.',
        'I love playing Werewolves of Miller Hollow with friends',
        'Personal Rubik\'s Cube record: <i class="fa fa-clock-o"></i> 38s',
        'I like to do metal detecting in France <i class="fa fa-magnet"></i>'
    ]
});

function triggerTab(tab_id) {
    $('ul.tabs').tabs('select_tab', tab_id);
    $('html, body').animate({
        scrollTop: $('#websites-tabs').offset().top
    }, 700);
}