function initMapRoadtrip() {

    var pointA = {lat: 36.169, lng: -115.139}; // Las Vegas
    var pointB = {lat: 36.057, lng: -112.136}; // Grand Canyon
    var pointC = {lat: 36.879, lng: -111.510}; // Lake Powell
    var pointD = {lat: 37.622, lng: -112.165}; // Bryce Canyon
    var pointE = {lat: 36.604, lng: -117.148}; // Death Valley
    var pointF = {lat: 37.748, lng: -119.587}; // Yosemite
    var pointG = {lat: 37.774, lng: -122.419}; // San Francisco
    var pointH = {lat: 36.269, lng: -121.809}; // Big Sur
    var pointI = {lat: 34.052, lng: -118.243}; // Los Angeles

    var infowindowA;
    var infowindowB;
    var infowindowC;
    var infowindowD;
    var infowindowE;
    var infowindowF;
    var infowindowG;
    var infowindowH;
    var infowindowI;

    var infowindowText;
    var infowindowStep = (activeLocale === 'fr') ? 'Étape' : 'Step';

    var map = new google.maps.Map(document.getElementById('roadtrip-map'), {
        zoom: 6,
        center: {lat: 36.800, lng: -117.572},
        mapTypeId: 'terrain',
        scrollwheel: false,
        streetViewControl: false,
        mapTypeControl: false
    });

    // Instantiate a directions service.
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map,
        preserveViewport: true,
        suppressMarkers: true
    });

    directionsService.route({
        origin: pointA,
        destination: pointI,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: [
            {location: pointB},
            {location: pointC},
            {location: pointD},
            {location: pointE},
            {location: pointF},
            {location: pointG},
            {location: pointH}
        ]
    }, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });

    /* ---------------------------------------------- */

    var markerA = new google.maps.Marker({
        position: pointA,
        title: "Las Vegas",
        label: "1",
        map: map
    });
    if (activeLocale === 'fr') {
        infowindowText = "Première étape du roadtrip ! Nous avons atteri à Las Vegas et visité la ville pendant deux jours. " +
            "Par la suite nous avons acheté une tente et loué une Jeep pour deux semaines. Direction Grand Canyon !"
    } else {
        infowindowText = "First step of the roadtrip! We landed in Las Vegas and visited the city for two days. " +
            "Thereafter we bought a tent and rented a Jeep for two weeks. To the Grand Canyon!"
    }
    infowindowA = new google.maps.InfoWindow({
            content:
            '<div class="roadtrip-popup">' +
                '<h1> <span>'+ infowindowStep +' #1</span> Las Vegas</h1>' +
                '<p>' + infowindowText + '</p>' +
                '<div class="row">' +
                    '<div class="col l4"><a href="themes/pb/assets/img/webdesign.jpg" data-lightbox="step1"><img src="themes/pb/assets/img/webdesign.jpg"></a></div>' +
                    '<div class="col l4"><a href="themes/pb/assets/img/EISTI.jpg" data-lightbox="step1"><img src="themes/pb/assets/img/EISTI.jpg"></a></div>' +
                    '<div class="col l4"><a href="themes/pb/assets/img/NYC01.jpg" data-lightbox="step1"><img src="themes/pb/assets/img/NYC01.jpg"></a></div>' +
                    '<a class="not-displayed" href="themes/pb/assets/img/Interface-Admin.png" data-lightbox="step1"></a>' +
                '</div>' +
            '</div>'
    });
    markerA.addListener('click', function() {
        infowindowA.open(map, markerA);
        infowindowB.close(); infowindowC.close();
        infowindowD.close(); infowindowE.close();
        infowindowF.close(); infowindowG.close();
        infowindowH.close(); infowindowI.close();
    });

    /* ---------------------------------------------- */

    var markerB = new google.maps.Marker({
        position: pointB,
        title: "Grand Canyon",
        label: "2",
        map: map
    });
    if (activeLocale === 'fr') {
        infowindowText = "L'aventure commence ! Incroyable levé de soleil sur la façade Sud du Grand Canyon, quelques photos risquées et un paysage à couper le souffle."
    } else {
        infowindowText = "The adventure begins! Amazing sunrise from the South Rim of the Grand Canyon, some risky pictures and a breathtaking scenery."
    }
    infowindowB = new google.maps.InfoWindow({
        content:
        '<div class="roadtrip-popup">' +
            '<h1> <span>'+ infowindowStep +' #2</span> Grand Canyon</h1>' +
            '<p>' + infowindowText + '</p>' +
            '<div class="row">' +
                '<div class="col l4"><a href="themes/pb/assets/img/webdesign.jpg" data-lightbox="step2"><img src="themes/pb/assets/img/webdesign.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/EISTI.jpg" data-lightbox="step2"><img src="themes/pb/assets/img/EISTI.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/NYC01.jpg" data-lightbox="step2"><img src="themes/pb/assets/img/NYC01.jpg"></a></div>' +
                '<a class="not-displayed" href="themes/pb/assets/img/Interface-Admin.png" data-lightbox="step2"></a>' +
            '</div>' +
        '</div>'
    });
    markerB.addListener('click', function() {
        infowindowB.open(map, markerB);
        infowindowA.close(); infowindowC.close();
        infowindowD.close(); infowindowE.close();
        infowindowF.close(); infowindowG.close();
        infowindowH.close(); infowindowI.close();
    });

    /* ---------------------------------------------- */

    var markerC = new google.maps.Marker({
        position: pointC,
        title: "Lake Powell",
        label: "3",
        map: map
    });
    if (activeLocale === 'fr') {
        infowindowText = "Nous avons fait une halte à Horseshoe Bend, un canyon gigantesque creusé par la rivière Colorado. Là non plus, pas de barrières, juste le vide !"
    } else {
        infowindowText = "We stopped at Horseshoe Bend, a gigantic canyon formed by the Colorado River. Again, no safety barriers, just the edge of the cliff!"
    }
    infowindowC = new google.maps.InfoWindow({
        content:
        '<div class="roadtrip-popup">' +
            '<h1> <span>'+ infowindowStep +' #3</span> Lake Powell</h1>' +
            '<p>' + infowindowText + '</p>' +
            '<div class="row">' +
                '<div class="col l4"><a href="themes/pb/assets/img/webdesign.jpg" data-lightbox="step3"><img src="themes/pb/assets/img/webdesign.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/EISTI.jpg" data-lightbox="step3"><img src="themes/pb/assets/img/EISTI.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/NYC01.jpg" data-lightbox="step3"><img src="themes/pb/assets/img/NYC01.jpg"></a></div>' +
                '<a class="not-displayed" href="themes/pb/assets/img/Interface-Admin.png" data-lightbox="step3"></a>' +
            '</div>' +
        '</div>'
    });
    markerC.addListener('click', function() {
        infowindowC.open(map, markerC);
        infowindowA.close(); infowindowB.close();
        infowindowD.close(); infowindowE.close();
        infowindowF.close(); infowindowG.close();
        infowindowH.close(); infowindowI.close();
    });

    /* ---------------------------------------------- */

    var markerD = new google.maps.Marker({
        position: pointD,
        title: "Bryce Canyon",
        label: "4",
        map: map
    });
    if (activeLocale === 'fr') {
        infowindowText = "L\'endroit que nous avons le plus apprécié. Les formations rocheuses de Bryce Canyon font penser à l'architecture gothique des cathédrales. " +
            "Nous avons campé deux nuits dans le parc qui offre également des randonnées incroyables."
    } else {
        infowindowText = "Definitely our favorite stop. The rock formations of Bryce Canyon reminded us of the Gothic architecture of European cathedrals. " +
            "We camped two nights in the park which also offers amazing hikes."
    }
    infowindowD = new google.maps.InfoWindow({
        content:
        '<div class="roadtrip-popup">' +
            '<h1> <span>'+ infowindowStep +' #4</span> Bryce Canyon</h1>' +
            '<p>' + infowindowText + '</p>' +
            '<div class="row">' +
                '<div class="col l4"><a href="themes/pb/assets/img/webdesign.jpg" data-lightbox="step4"><img src="themes/pb/assets/img/webdesign.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/EISTI.jpg" data-lightbox="step4"><img src="themes/pb/assets/img/EISTI.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/NYC01.jpg" data-lightbox="step4"><img src="themes/pb/assets/img/NYC01.jpg"></a></div>' +
                '<a class="not-displayed" href="themes/pb/assets/img/Interface-Admin.png" data-lightbox="step4"></a>' +
            '</div>' +
        '</div>'
    });
    markerD.addListener('click', function() {
        infowindowD.open(map, markerD);
        infowindowA.close(); infowindowB.close();
        infowindowC.close(); infowindowE.close();
        infowindowF.close(); infowindowG.close();
        infowindowH.close(); infowindowI.close();
    });

    /* ---------------------------------------------- */

    var markerE = new google.maps.Marker({
        position: pointE,
        title: "Death Valley",
        label: "5",
        map: map
    });
    if (activeLocale === 'fr') {
        infowindowText = "Levé 7h00 du matin : 40°C. Bienvenue à la Vallée de la Mort ! Des paysages lunaires magnifiques dans l'endroit le plus chaud sur Terre. " +
            "Un record de température de 57°C en 1913 et 50°C quand nous y étions."
    } else {
        infowindowText = "We woke up at 7:00am: 40°C. Welcome to the Death Valley! Wonderful lunar landscapes in the hottest place on Earth. " +
            "The hottest atmospheric temperature ever recorded on Earth was 57°C in the Death Valley in 1913."
    }
    infowindowE = new google.maps.InfoWindow({
        content:
        '<div class="roadtrip-popup">' +
            '<h1> <span>'+ infowindowStep +' #5</span> Death Valley</h1>' +
            '<p>' + infowindowText + '</p>' +
            '<div class="row">' +
                '<div class="col l4"><a href="themes/pb/assets/img/webdesign.jpg" data-lightbox="step5"><img src="themes/pb/assets/img/webdesign.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/EISTI.jpg" data-lightbox="step5"><img src="themes/pb/assets/img/EISTI.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/NYC01.jpg" data-lightbox="step5"><img src="themes/pb/assets/img/NYC01.jpg"></a></div>' +
                '<a class="not-displayed" href="themes/pb/assets/img/Interface-Admin.png" data-lightbox="step5"></a>' +
            '</div>' +
        '</div>'
    });
    markerE.addListener('click', function() {
        infowindowE.open(map, markerE);
        infowindowA.close(); infowindowB.close();
        infowindowC.close(); infowindowD.close();
        infowindowF.close(); infowindowG.close();
        infowindowH.close(); infowindowI.close();
    });

    /* ---------------------------------------------- */

    var markerF = new google.maps.Marker({
        position: pointF,
        title: "Yosemite Park",
        label: "6",
        map: map
    });
    if (activeLocale === 'fr') {
        infowindowText = "Nous avons campé deux jours dans cet agréable parc national de Californie. À défaut d'avoir croisé un ours, nous avons pu voir des " +
            "sequoias géants et des montages polies par le mouvement des anciens glaciers."
    } else {
        infowindowText = "We camped two days in this pleasant Californian national park. We did not see bears but we could admire giant sequoias " +
            "and mountains polished by the ancient glaciers."
    }
    infowindowF = new google.maps.InfoWindow({
        content:
        '<div class="roadtrip-popup">' +
            '<h1> <span>'+ infowindowStep +' #6</span> Yosemite Park</h1>' +
            '<p>' + infowindowText + '</p>' +
            '<div class="row">' +
                '<div class="col l4"><a href="themes/pb/assets/img/webdesign.jpg" data-lightbox="step6"><img src="themes/pb/assets/img/webdesign.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/EISTI.jpg" data-lightbox="step6"><img src="themes/pb/assets/img/EISTI.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/NYC01.jpg" data-lightbox="step6"><img src="themes/pb/assets/img/NYC01.jpg"></a></div>' +
                '<a class="not-displayed" href="themes/pb/assets/img/Interface-Admin.png" data-lightbox="step6"></a>' +
            '</div>' +
        '</div>'
    });
    markerF.addListener('click', function() {
        infowindowF.open(map, markerF);
        infowindowA.close(); infowindowB.close();
        infowindowC.close(); infowindowD.close();
        infowindowE.close(); infowindowG.close();
        infowindowH.close(); infowindowI.close();
    });

    /* ---------------------------------------------- */

    var markerG = new google.maps.Marker({
        position: pointG,
        title: "San Francisco",
        label: "7",
        map: map
    });
    if (activeLocale === 'fr') {
        infowindowText = "De retour en ville ! On ne remerciera jamais assez la conduite automatique dans cette ville faite de côtes et de pentes. " +
            "Le Golden Gate Bridge de San Francisco était impressionnant."
    } else {
        infowindowText = "The return to the civilisation! We couldn't thank the automatic transmission enough in this sloping streets city. " +
            "The Golden Gate Bridge was really impressive."
    }
    infowindowG = new google.maps.InfoWindow({
        content:
        '<div class="roadtrip-popup">' +
            '<h1> <span>'+ infowindowStep +' #7</span> San Francisco</h1>' +
            '<p>' + infowindowText + '</p>' +
            '<div class="row">' +
                '<div class="col l4"><a href="themes/pb/assets/img/webdesign.jpg" data-lightbox="step7"><img src="themes/pb/assets/img/webdesign.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/EISTI.jpg" data-lightbox="step7"><img src="themes/pb/assets/img/EISTI.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/NYC01.jpg" data-lightbox="step7"><img src="themes/pb/assets/img/NYC01.jpg"></a></div>' +
                '<a class="not-displayed" href="themes/pb/assets/img/Interface-Admin.png" data-lightbox="step7"></a>' +
            '</div>' +
        '</div>'
    });
    markerG.addListener('click', function() {
        infowindowG.open(map, markerG);
        infowindowA.close(); infowindowB.close();
        infowindowC.close(); infowindowD.close();
        infowindowE.close(); infowindowF.close();
        infowindowH.close(); infowindowI.close();
    });

    /* ---------------------------------------------- */

    var markerH = new google.maps.Marker({
        position: pointH,
        title: "Big Sur",
        label: "8",
        map: map
    });
    if (activeLocale === 'fr') {
        infowindowText = "Nous avons longé la côte Pacifique jusqu'à Big Sur, une vue grandiose sur le littoral sauvage de Californie."
    } else {
        infowindowText = "We drove along the Pacific coast to Big Sur, a great viewpoint of the wild Californian seaside."
    }
    infowindowH = new google.maps.InfoWindow({
        content:
        '<div class="roadtrip-popup">' +
            '<h1> <span>'+ infowindowStep +' #8</span> Big Sur</h1>' +
            '<p>' + infowindowText + '</p>' +
            '<div class="row">' +
                '<div class="col l4"><a href="themes/pb/assets/img/webdesign.jpg" data-lightbox="step8"><img src="themes/pb/assets/img/webdesign.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/EISTI.jpg" data-lightbox="step8"><img src="themes/pb/assets/img/EISTI.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/NYC01.jpg" data-lightbox="step8"><img src="themes/pb/assets/img/NYC01.jpg"></a></div>' +
                '<a class="not-displayed" href="themes/pb/assets/img/Interface-Admin.png" data-lightbox="step8"></a>' +
            '</div>' +
        '</div>'
    });
    markerH.addListener('click', function() {
        infowindowH.open(map, markerH);
        infowindowA.close(); infowindowB.close();
        infowindowC.close(); infowindowD.close();
        infowindowE.close(); infowindowF.close();
        infowindowG.close(); infowindowI.close();
    });

    /* ---------------------------------------------- */

    var markerI = new google.maps.Marker({
        position: pointI,
        title: "Los Angeles",
        label: "9",
        map: map
    });
    if (activeLocale === 'fr') {
        infowindowText = "Test étape de l\'aventure ! Atterir à Las Vegas, découvrir la ville pendant deux jours, louer une voiture pour le roadtrip et conduire jusqu\'au Grand Canyon !"
    } else {
        infowindowText = "Test étape de l\'aventure ! Atterir à Las Vegas, découvrir la ville pendant deux jours, louer une voiture pour le roadtrip et conduire jusqu\'au Grand Canyon !"
    }
    infowindowI = new google.maps.InfoWindow({
        content:
        '<div class="roadtrip-popup">' +
            '<h1> <span>'+ infowindowStep +' #9</span> Los Angeles</h1>' +
            '<p>' + infowindowText + '</p>' +
            '<div class="row">' +
                '<div class="col l4"><a href="themes/pb/assets/img/webdesign.jpg" data-lightbox="step9"><img src="themes/pb/assets/img/webdesign.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/EISTI.jpg" data-lightbox="step9"><img src="themes/pb/assets/img/EISTI.jpg"></a></div>' +
                '<div class="col l4"><a href="themes/pb/assets/img/NYC01.jpg" data-lightbox="step9"><img src="themes/pb/assets/img/NYC01.jpg"></a></div>' +
                '<a class="not-displayed" href="themes/pb/assets/img/Interface-Admin.png" data-lightbox="step9"></a>' +
            '</div>' +
        '</div>'
    });
    markerI.addListener('click', function() {
        infowindowI.open(map, markerI);
        infowindowA.close(); infowindowB.close();
        infowindowC.close(); infowindowD.close();
        infowindowE.close(); infowindowF.close();
        infowindowG.close(); infowindowH.close();
    });

    /* ---------------------------------------------- */

    // Open first step of roadtrip
    infowindowA.open(map, markerA);

}
