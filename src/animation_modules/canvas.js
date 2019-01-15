import THREELib from "three-js";
import img from './images/main-img-data'


var THREE = THREELib();

//canvas setup _____________________________________________________________________
//-----the below effect was forked from a pen(https://codepen.io/Mamboleoo/pen/wKqwPN) by Louis Hoebregts and edited by 1XWebbyX1----//


var createCanvas = (function (){
 var start = function(){
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
  }


  return {
    start: start,
  }

})();

export default createCanvas;
