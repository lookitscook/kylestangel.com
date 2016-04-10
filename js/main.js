$(function() {
  var k = kontext( document.querySelector( '.kontext' ) );

  var scene = document.getElementById('staff-list');
  var parallax = new Parallax(scene);

  /*$('.headline').plaxify()
  $.plax.enable()*/

  initParticles();

  var nextArray = document.body.getElementsByClassName( 'next-button' );

	// Create one bullet per layer
	for( var i = 0, len = k.getTotal(); i < len; i++ ) {
		var next = nextArray[i];
		next.className = i === 0 ? 'active next-button' : 'next-button';
		next.setAttribute( 'index', (i+1) % len );
		next.onclick = function( event ) {
         k.show( event.target.getAttribute( 'index' ) );
      };
		next.ontouchstart = function( event ) {
         k.show( event.target.getAttribute( 'index' ));
      };
		//bulletsContainer.appendChild( bullet );
	}


function initParticles(){
   particlesJS('particles-js',{
     "particles": {
      "number": {
         "value": 100,
         "density": {
           "enable": true,
           "value_area": 800
         }
      },
      "color": {
         "value": "#16a085"
      },
      "shape": {
         "type": "circle",
         "stroke": {
           "width": 0,
           "color": "#000000"
         },
         "polygon": {
           "nb_sides": 5
         },
         "image": {
           "src": "img/github.svg",
           "width": 100,
           "height": 100
         }
      },
      "opacity": {
         "value": 0.6,
         "random": true,
         "anim": {
           "enable": false,
           "speed": 1,
           "opacity_min": 0.1,
           "sync": false
         }
      },
      "size": {
         "value": 10,
         "random": true,
         "anim": {
           "enable": false,
           "speed": 40,
           "size_min": 0.1,
           "sync": false
         }
      },
      "line_linked": {
         "enable": false,
         "distance": 500,
         "color": "#ffffff",
         "opacity": 0.4,
         "width": 2
      },
      "move": {
         "enable": true,
         "speed": 10,
         "direction": "bottom",
         "random": false,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
           "enable": false,
           "rotateX": 600,
           "rotateY": 1200
         }
      }
     },
     "interactivity": {
      "detect_on": "canvas",
      "events": {
         "onhover": {
           "enable": false,
           "mode": "grab"
         },
         "onclick": {
           "enable": true,
           "mode": "repulse"
         },
         "resize": true
      },
      "modes": {
         "grab": {
           "distance": 400,
           "line_linked": {
             "opacity": 0.5
           }
         },
         "bubble": {
           "distance": 400,
           "size": 4,
           "duration": 0.3,
           "opacity": 1,
           "speed": 3
         },
         "repulse": {
           "distance": 200,
           "duration": 0.4
         },
         "push": {
           "particles_nb": 4
         },
         "remove": {
           "particles_nb": 2
         }
      }
     },
     "retina_detect": true
   }
);
}

});
