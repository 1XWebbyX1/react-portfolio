import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import img from './data/images/main-img-data'
import $ from 'jquery'
import {TweenMax, TimelineMax, Back, Bounce} from "gsap/TweenMax";
//import * as serviceWorker from './serviceWorker';
import THREELib from "three-js";
var THREE = THREELib();

ReactDOM.render(<App />, document.getElementById('root'));


$(document).ready(function(){

  setTimeout(function(){
      //display app after load--------
      $('#loader').css('display', 'none');
       $('#root').css('display', 'block');

    //hover on project function------------
    $('.inner').hover(function() {
       $(this).css('mask-image', 'none');
       $('.inner .graph').css('visibility', 'hidden');
     }, function() {
      $(this).css('mask-image', 'radial-gradient(black 30%, rgba(0, 0, 0, 0.8) , rgba(255, 255, 255, 0.1) )');
      $('.inner .graph').css('visibility', 'visible');
   });

    //hover on buttons in home section---------------
    $('#project-btn').hover(function() {
       $('#line-1').css('box-shadow', '0px 1px 4px inset #d3d3d3');

   }, function() {
      $('#line-1').css('box-shadow', '0px 1px 4px inset #111');
   });

     $('#about-btn').hover(function() {
       $('#line-2').css('box-shadow', '0px 1px 4px inset #d3d3d3');

   }, function() {
      $('#line-2').css('box-shadow', '0px 1px 4px inset #111');
   });



    //GSAP for animations_____________________________________________________________________________________


//main home page animation-------------------

var tl = new TimelineMax({delay: 2.8});
tl.from('#home h1', .75, {left: '150%', boxShadow: '1500px 0px 0px inset #050505', color: '#050505', ease: Back.easeOut, textShadow: 'none'})
 .to('#home h1', 0.5, {boxShadow: '0px 0px 0px inset #050505', color: '#d9d9d9', textShadow:   `  0 1px 0 hsl(174,5%,80%),
	                 0 2px 0 hsl(174,5%,75%),
	                 0 3px 0 hsl(174,5%,70%),
	                 0 4px 0 hsl(174,5%,66%),
	                 0 5px 0 hsl(174,5%,64%),
	                 0 6px 0 hsl(174,5%,62%),
	                 0 7px 0 hsl(174,5%,61%),
	                 0 8px 0 hsl(174,5%,60%),

	                 0 0 5px rgba(0,0,0,.05),
	                0 1px 3px rgba(0,0,0,.2),
	                0 3px 5px rgba(0,0,0,.2),
	               0 5px 10px rgba(0,0,0,.2),
	              0 10px 10px rgba(0,0,0,.2),
	              0 20px 20px rgba(0,0,0,.3)`}, '+=.1')
.from('#home p, #home button, .line', 1, {opacity: 0,  ease:Bounce.easeOut, scale: 0.2}, '-=.75')
 .to('#home p', 0.5, {boxShadow: '0px 0px 0px inset #050505', color: '#ddd'})
.to('.line .one', 3, {x: 150, repeat: -1, yoyo: true, ease: Back.easeOut})
 .to('.line .two', 3, {x: -50, repeat: -1, yoyo: true, ease: Back.easeOut}, '-=2.5');
 //----------------------------------------------------------------


    //scroll animations with debouncing---------------------------------------
var latestKnownScrollPos = 0,
    elements = $('.anim'), // all elements to be animated
    ticking = false;


 function onScroll() {
	 latestKnownScrollPos = $(window).scrollTop();
   requestTick();
}

 function update() {
   ticking = false;
   var window_height = $(window).height();
	 var currentScrollY = latestKnownScrollPos;
     if(currentScrollY === 0){
        $('.anim').removeClass('come-in'); //if at the top
     }
   var window_bottom_position = (currentScrollY + window_height);


	// read offset of DOM elements
   $.each(elements, function(){ // iterate through each item in array elements
     var $element = $(this);
     var element_top_position = $element.offset().top;


   if(element_top_position <= window_bottom_position && element_top_position >= currentScrollY){
     $($element).addClass('come-in'); //if visible in viewport apply css class for animation
     if($element.attr('id') === 'about'){ // extra animation for icons in about section
       TweenMax.staggerFromTo($('#about .icon'), 1, {scale: 0.2, x: 0}, {scale: 1, x: 20}, 0.2);
     }
    }
   });
}


function requestTick() {
	if(!ticking) {
		requestAnimationFrame(update);
	}
	ticking = true;
}


$(window).scroll(onScroll);






//canvas setup _____________________________________________________________________
//-----the below effect was forked from a pen(https://codepen.io/Mamboleoo/pen/wKqwPN) by Louis Hoebregts and edited by 1XWebbyX1----//
var renderer, scene, camera, ww, wh, particles;

ww = window.innerWidth;
wh = window.innerHeight;

var centerVector = new THREE.Vector3(0, 0, 0);
var previousTime = 0,
	speed = 10,
	isMouseDown = false;

var getImageData = function(image) {
  var canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;

	var ctx = canvas.getContext("2d");
	ctx.drawImage(image, 0, 0);

	return ctx.getImageData(0, 0, image.width, image.height);
}


var drawTheMap = function() {
  var geometry = new THREE.Geometry();
  var imagedata = getImageData(image);
	var material = new THREE.PointsMaterial({
		size: 3,
		color: 0xca7564,
		sizeAttenuation: false
	});
	for (var y = 0, y2 = imagedata.height; y < y2; y += 2) {
		for (var x = 0, x2 = imagedata.width; x < x2; x += 2) {
			if (imagedata.data[(x * 4 + y * 4 * imagedata.width)] < 128) {

				var vertex = new THREE.Vector3();
				vertex.x = x - imagedata.width / 2;
				vertex.y = -y + imagedata.height / 2;
				vertex.z = -Math.random()*500;

				vertex.speed = Math.random() / speed + 0.015;

				geometry.vertices.push(vertex);
			}
		}
	}
	particles = new THREE.Points(geometry, material);

	scene.add(particles);

	requestAnimationFrame(render);
};


var init = function() {
	renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById("map"),
		antialias: true
	});
	renderer.setSize(ww, wh);
	renderer.setClearColor(0x000000);

	scene = new THREE.Scene();

	camera = new THREE.OrthographicCamera( ww / - 2, ww / 2, wh / 2, wh / - 2, 1, 1000 );
	camera.position.set(7, 0, 4);
	camera.lookAt(centerVector);
	scene.add(camera);
  var x = window.matchMedia("(max-width: 600px)");
  if (x.matches) { // If media query matches
    camera.zoom = 2;
  } else {
    camera.zoom = 4;
  }

	camera.updateProjectionMatrix();


	drawTheMap();
    window.addEventListener('resize', onResize, false);

};


var onResize = function(){
	ww = window.innerWidth;
	wh = window.innerHeight;
	renderer.setSize(ww, wh);
    camera.left    = ww / - 2;
    camera.right   = ww / 2;
    camera.top     = wh / 2;
    camera.bottom  = wh / - 2;
    camera.updateProjectionMatrix();
};


var render = function(a) {

	requestAnimationFrame(render);
	particles.geometry.verticesNeedUpdate = true;
	if(!isMouseDown){
		camera.position.x += (0-camera.position.x)*0.06;
		camera.position.y += (0-camera.position.y)*0.06;
		camera.lookAt(centerVector);
	}

	renderer.render(scene, camera);
};


var imgData = img;
var image = document.createElement("img");
image.onload = init;
image.src = imgData;

  }, 8000);

});
