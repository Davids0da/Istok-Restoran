function initMap() {
  var myLatLng = { lat: 44.818857, lng: 20.462820 };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16,
    scrollwheel: false,
    styles: [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "saturation": 36
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 40
      }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 21
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 18
      }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 19
      }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
      ]
    }
    ]
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: {
      text: 'Vijetnamski Restoran Istok',
      color: 'white'
    },
  });
   var contentString = 
            '<div id="bodyContent">'+
            '<b>Gospodar Jevremova 50,</b> ' +
             '<b>11000 Beograd,</b> ' +
              '<b>Srbija</b> ' +
            '</div>';

var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        
 marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        $(document).ready(function () {
             infowindow.open(map, marker);
        });
};

$(document).ready(function(){
    $("#header").fadeIn(3000);
});

$(document).ready(() => {
  $('.navbar a,#linebreak a').click(function(e){
      let to = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(to).offset().top
      })
    });
});

var tooltips = document.querySelectorAll('#tooltip span');

var tooltips1 = document.querySelectorAll('#tooltip1 span');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
        z = (e.clientX - 620) + 'px',
        f = (e.clientY + 20) + 'px';
        
    for (var i = 0; i <  tooltips.length ; i++) {
        tooltips1[i].style.top = y;
        tooltips1[i].style.left = x;  
    };     
    for (var i = 0; i < tooltips1.length  ; i++) {
        tooltips[i].style.top = f;
        tooltips[i].style.left = z;
    }
}; 
