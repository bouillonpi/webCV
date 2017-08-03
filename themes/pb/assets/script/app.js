$( document ).ready(function(){

    $(".button-collapse").sideNav();

    $('.modal').modal();

    $('ul.tabs').tabs();

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
$('#typeWriteHome-FR').typeIt({
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
        'Je suis le caméraman de ZeratoR <i class="fa fa-camera"></i>',
        'Je n\'arrive pas à faire ça : <i class="fa fa-hand-spock-o"></i>'
    ]
});

$('#typeWriteAbout-FR').typeIt({
    speed: 80,
    autoStart: false,
    breakLines: false,
    deleteDelay: 4500,
    loop: true,
    loopDelay: 4500,
    strings: [
        'Je pratique le Kung Fu et le Karaté <i class="fa fa-hand-rock-o"></i>',
        'Je fais des trucs <span class="css-badass">#BADA55</span> en <span class="css-css">#C55</span>',
        'Je regarde le coucher de soleil à Manhattan',
        'Je suis mauvais à League of Legends <i class="fa fa-thumbs-o-down"></i> </br>(Pourtant je tryhard)',
        'Je fais des blagues bien nulles <i class="fa fa-meh-o"></i>',
        'Je suis le caméraman de ZeratoR <i class="fa fa-camera"></i>',
        'Je n\'arrive pas à faire ça : <i class="fa fa-hand-spock-o"></i>',
        'J\'ai essayé de comprendre Prolog. Sans succès...',
        'J\'adore jouer aux Loups-Garous de Thiercelieux avec des amis',
        'Record personnel de Rubik\'s Cube : <i class="fa fa-clock-o"></i> 38s',
        'Je fais de la détection de métaux <i class="fa fa-magnet"></i>',
        'Mon chat Ioda pèse 11kg et mesure 1,40m de long. Fat kid.'
    ]
});

function triggerTab(tab_id) {
    $('ul.tabs').tabs('select_tab', tab_id);
    $('html, body').animate({
        scrollTop: $('#websites-tabs').offset().top - 40
    }, 700);
}