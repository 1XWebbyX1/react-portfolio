import $ from 'jquery'
import {TweenMax} from "gsap/TweenMax";


var scrollAnimations = (function () {

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
         TweenMax.staggerFromTo($('#about .icon'), 1, {scale: 0.2, x: 0}, {scale: 1, x: 20});
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


  return {
    onScroll: onScroll
  }
})();


export default scrollAnimations;
