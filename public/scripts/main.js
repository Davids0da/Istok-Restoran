$(document).ready(function () {
  setTimeout(function (){
  $('body').addClass('loaded');
  $('h1').css('color', '#ffffff')
}, 5000); 
});

var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "images/background7.jpg",
    "images/background5.jpg",
    "images/background1.jpg",
    "images/background3.jpg",
    "images/background2.jpg"
)

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
  });
  var contentString =
    '<div id="bodyContent">' +
    '<b>Gospodar Jevremova 50,</b> ' +
    '<b>11000 Beograd,</b> ' +
    '<b>Srbija</b> ' +
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
  $(document).ready(function () {
    infowindow.open(map, marker);
  });
};

$(document).ready(function () {
  $("#header").fadeIn(2000);
});

$(document).ready(() => {
  $('.navbar a,#linebreak a').click(function (e) {
    let to = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(to).offset().top
    })
  });
});






var tooltips1 = document.querySelectorAll('#tooltip1 span');
var tooltips = document.querySelectorAll('#tooltip span');
var tooltips2 = document.querySelectorAll('#tooltip2 span');
var tooltips3 = document.querySelectorAll('#tooltip3 span');
var tooltips4 = document.querySelectorAll('#tooltip4 span');
var tooltips5 = document.querySelectorAll('#tooltip5 span');
var tooltips6 = document.querySelectorAll('#tooltip6 span');
var tooltips7 = document.querySelectorAll('#tooltip7 span');
var tooltips8 = document.querySelectorAll('#tooltip8 span');
var tooltips9 = document.querySelectorAll('#tooltip9 span');
var tooltips10 = document.querySelectorAll('#tooltip10 span');
var tooltips11 = document.querySelectorAll('#tooltip11 span');
var tooltips12 = document.querySelectorAll('#tooltip12 span');
var tooltips13 = document.querySelectorAll('#tooltip13 span');
var tooltips14 = document.querySelectorAll('#tooltip14 span');
var tooltips15 = document.querySelectorAll('#tooltip15 span');
var tooltips16 = document.querySelectorAll('#tooltip16 span');
var tooltips17 = document.querySelectorAll('#tooltip17 span');
var tooltips18 = document.querySelectorAll('#tooltip18 span');
var tooltips19 = document.querySelectorAll('#tooltip19 span');
var tooltips20 = document.querySelectorAll('#tooltip20 span');
var tooltips21 = document.querySelectorAll('#tooltip21 span');
var tooltips22 = document.querySelectorAll('#tooltip22 span');
var tooltips23 = document.querySelectorAll('#tooltip23 span');
var tooltips24 = document.querySelectorAll('#tooltip24 span');
var tooltips25 = document.querySelectorAll('#tooltip25 span');
var tooltips26 = document.querySelectorAll('#tooltip26 span');
var tooltips27 = document.querySelectorAll('#tooltip27 span');
var tooltips28 = document.querySelectorAll('#tooltip28 span');
var tooltips29 = document.querySelectorAll('#tooltip29 span');
var tooltips30 = document.querySelectorAll('#tooltip30 span');
var tooltips31 = document.querySelectorAll('#tooltip31 span');
var tooltips32 = document.querySelectorAll('#tooltip32 span');
var tooltips33 = document.querySelectorAll('#tooltip33 span');


window.onmousemove = function (e) {
  // prva
  var currentPosition = $('#tooltip').offset().top;
  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();
  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;
  var width1 = $(window).width();
  

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 200) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips.length; i++) {
    tooltips[i].style.top = y;
    tooltips[i].style.left = x;
  };

  // druga


  var currentPosition = $('#tooltip1').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 340) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips1.length; i++) {
    tooltips1[i].style.top = y;
    tooltips1[i].style.left = x;
  };

  // treca
  var currentPosition = $('#tooltip2').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 340) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips2.length; i++) {
    tooltips2[i].style.top = y;
    tooltips2[i].style.left = x;
  };
  // cetvrta
  var currentPosition = $('#tooltip3').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 340) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips3.length; i++) {
    tooltips3[i].style.top = y;
    tooltips3[i].style.left = x;
  };
  // peta
  var currentPosition = $('#tooltip4').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 340) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips4.length; i++) {
    tooltips4[i].style.top = y;
    tooltips4[i].style.left = x;
  };
  // sesta
  var currentPosition = $('#tooltip5').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 200) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips5.length; i++) {
    tooltips5[i].style.top = y;
    tooltips5[i].style.left = x;
  };
  // sedma
  var currentPosition = $('#tooltip6').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 340) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips6.length; i++) {
    tooltips6[i].style.top = y;
    tooltips6[i].style.left = x;
  };
  // osma
  var currentPosition = $('#tooltip7').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 340) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips7.length; i++) {
    tooltips7[i].style.top = y;
    tooltips7[i].style.left = x;
  };
  // deveta
  var currentPosition = $('#tooltip8').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 340) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips8.length; i++) {
    tooltips8[i].style.top = y;
    tooltips8[i].style.left = x;
  };
  // deseta
  var currentPosition = $('#tooltip9').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 370) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips9.length; i++) {
    tooltips9[i].style.top = y;
    tooltips9[i].style.left = x;
  };
  // jedanaesta
  var currentPosition = $('#tooltip10').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 340) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips10.length; i++) {
    tooltips10[i].style.top = y;
    tooltips10[i].style.left = x;
  };
  // dvanaesta
  var currentPosition = $('#tooltip11').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY - 350 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips11.length; i++) {
    tooltips11[i].style.top = y;
    tooltips11[i].style.left = x;
  };

   // trinaesta
  if (width1 > 999) {
    var currentPosition = $('#tooltip12').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY - 400 ) + 'px';
  }
  else {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips12.length; i++) {
    tooltips12[i].style.top = y;
    tooltips12[i].style.left = x;
  };
     // cetrnaesta
  var currentPosition = $('#tooltip13').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 260) + 'px',
      y = (e.clientY - 390 ) + 'px';
  }
  else {
    var x = (e.clientX - 260) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips13.length; i++) {
    tooltips13[i].style.top = y;
    tooltips13[i].style.left = x;
  };
       // petnaesta
  var currentPosition = $('#tooltip14').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 260) + 'px',
      y = (e.clientY - 320 ) + 'px';
  }
  else {
    var x = (e.clientX - 260) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips14.length; i++) {
    tooltips14[i].style.top = y;
    tooltips14[i].style.left = x;
  };
         // sesnaesta
  var currentPosition = $('#tooltip15').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY - 350 ) + 'px';
  }
  else {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips15.length; i++) {
    tooltips15[i].style.top = y;
    tooltips15[i].style.left = x;
  };
           // sedamnaesta
  var currentPosition = $('#tooltip16').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY - 370 ) + 'px';
  }
  else {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips16.length; i++) {
    tooltips16[i].style.top = y;
    tooltips16[i].style.left = x;
  };
         // osamnaesta
  var currentPosition = $('#tooltip17').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 260) + 'px',
      y = (e.clientY - 320 ) + 'px';
  }
  else {
    var x = (e.clientX - 260) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips17.length; i++) {
    tooltips17[i].style.top = y;
    tooltips17[i].style.left = x;
  };
           // devetnaesta
  var currentPosition = $('#tooltip18').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY - 350 ) + 'px';
  }
  else {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips18.length; i++) {
    tooltips18[i].style.top = y;
    tooltips18[i].style.left = x;
  };
             // dvadeseta
  var currentPosition = $('#tooltip19').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY - 350 ) + 'px';
  }
  else {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips19.length; i++) {
    tooltips19[i].style.top = y;
    tooltips19[i].style.left = x;
  };
               // dvadesetprva
  var currentPosition = $('#tooltip20').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY - 425 ) + 'px';
  }
  else {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips20.length; i++) {
    tooltips20[i].style.top = y;
    tooltips20[i].style.left = x;
  };
               // dvadesetdruga
  var currentPosition = $('#tooltip21').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY - 350 ) + 'px';
  }
  else {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips21.length; i++) {
    tooltips21[i].style.top = y;
    tooltips21[i].style.left = x;
  };
                 // dvadesettreca
  var currentPosition = $('#tooltip22').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY - 350 ) + 'px';
  }
  else {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips22.length; i++) {
    tooltips22[i].style.top = y;
    tooltips22[i].style.left = x;
  };
                   // dvadesetcetvrta
  var currentPosition = $('#tooltip23').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY - 350 ) + 'px';
  }
  else {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips23.length; i++) {
    tooltips23[i].style.top = y;
    tooltips23[i].style.left = x;
  };
                     // dvadesetcetvrta
  var currentPosition = $('#tooltip24').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY - 350 ) + 'px';
  }
  else {
    var x = (e.clientX - 510) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips24.length; i++) {
    tooltips24[i].style.top = y;
    tooltips24[i].style.left = x;
  };
  }
else {
  var currentPosition = $('#tooltip12').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 400 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips12.length; i++) {
    tooltips12[i].style.top = y;
    tooltips12[i].style.left = x;
  };
     // cetrnaesta
  var currentPosition = $('#tooltip13').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 390 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips13.length; i++) {
    tooltips13[i].style.top = y;
    tooltips13[i].style.left = x;
  };
       // petnaesta
  var currentPosition = $('#tooltip14').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 320 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips14.length; i++) {
    tooltips14[i].style.top = y;
    tooltips14[i].style.left = x;
  };
         // sesnaesta
  var currentPosition = $('#tooltip15').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 350 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips15.length; i++) {
    tooltips15[i].style.top = y;
    tooltips15[i].style.left = x;
  };
           // sedamnaesta
  var currentPosition = $('#tooltip16').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 370 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips16.length; i++) {
    tooltips16[i].style.top = y;
    tooltips16[i].style.left = x;
  };
         // osamnaesta
  var currentPosition = $('#tooltip17').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 320 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips17.length; i++) {
    tooltips17[i].style.top = y;
    tooltips17[i].style.left = x;
  };
           // devetnaesta
  var currentPosition = $('#tooltip18').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 350 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips18.length; i++) {
    tooltips18[i].style.top = y;
    tooltips18[i].style.left = x;
  };
             // dvadeseta
  var currentPosition = $('#tooltip19').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 350 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips19.length; i++) {
    tooltips19[i].style.top = y;
    tooltips19[i].style.left = x;
  };
               // dvadesetprva
  var currentPosition = $('#tooltip20').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 425 ) + 'px';
  }
  else {
    var x = (e.clientX  + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips20.length; i++) {
    tooltips20[i].style.top = y;
    tooltips20[i].style.left = x;
  };
               // dvadesetdruga
  var currentPosition = $('#tooltip21').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 350 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips21.length; i++) {
    tooltips21[i].style.top = y;
    tooltips21[i].style.left = x;
  };
                 // dvadesettreca
  var currentPosition = $('#tooltip22').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 350 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips22.length; i++) {
    tooltips22[i].style.top = y;
    tooltips22[i].style.left = x;
  };
                   // dvadesetcetvrta
  var currentPosition = $('#tooltip23').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 350 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips23.length; i++) {
    tooltips23[i].style.top = y;
    tooltips23[i].style.left = x;
  };
                     // dvadesetcetvrta
  var currentPosition = $('#tooltip24').offset().top;

  var topYOffset = pageYOffset;
  var bottomYOffset = pageYOffset + $(window).height();

  var top = currentPosition - topYOffset;
  var bottom = bottomYOffset - currentPosition;

  if (top > bottom) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 350 ) + 'px';
  }
  else {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
  }
  for (var i = 0; i < tooltips24.length; i++) {
    tooltips24[i].style.top = y;
    tooltips24[i].style.left = x;
  };
}

  
  
  
};



$(window).on("load", function () {
  $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".col-md-12 , .col-md-10 , .col-md-2 , .col-md-7 , .col-md-4 , .col-md-5  ").each(function () {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) { $(this).fadeTo(500, 1); }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


