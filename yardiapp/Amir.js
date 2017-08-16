function addparty() {
        var uluru = {lat: 40.7412, lng: -73.9682};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

    //     var contentString = '<div id="content">'+
    //         '<div id="siteNotice">'+
    //         '</div>'+
    //         '<h1 id="firstHeading" class="firstHeading">AMIR IS THAT NIGGA /h1>'+
    //         '<div id="bodyContent">'+
    //         '<p><b>Amir</b>, also referred to as <b>The smartest Nigga you know</b>, is a monster ' +
    //         '</p>'+
    //         '<p>Attribution: Amir, <a href="https://amasc4.github.io/">'+
    //         'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    //         '(last visited June 22, 2009).</p>'+
    //         '</div>'+
    //         '</div>';

    //     var infowindow = new google.maps.InfoWindow({
    //       content: contentString
    //     });

    //     var marker = new google.maps.Marker({
    //       position: uluru,
    //       map: map,
    //       title: 'Party Location'
    //     });
    //     marker.addListener('click', function() {
    //       infowindow.open(map, marker);
    //     });
    //   }