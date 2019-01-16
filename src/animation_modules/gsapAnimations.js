import {TimelineMax, Back, Bounce} from "gsap/TweenMax";


var animations = (function () {

  var tm = new TimelineMax({paused: true});
  tm.fromTo('.i-11', .5, {top: '11%', right: '49%'}, {top: '25%', right: '55.5%'},)
  .fromTo('.i-8', .5, {top: '10%', right: '25%'}, {top: '16%', right: '51%'}, '-=0.48')
  .fromTo('.i-7', .5, {top: '8%', right: '15%'}, {top: '13%', right: '53%'}, '-=0.48')
  .fromTo('.i-4', .5, {top: '2%', left: '4%'}, {top: '25%', left: '55%'}, '-=0.48')
  .fromTo('.i-2', .5, {top: '0%', left: '20%'}, {top: '16.3%', left: '51.5%'}, '-=0.48')
  .fromTo('.i-1', .25, {top: '2%', left: '35%'}, {top: '13%', left: '54%'}, '-=0.20')
  .fromTo('.i-3', .25, {top: '10%', left: '30%'}, {top: '20%', left: '40%'}, '-=0.20')
  .fromTo('.i-6', .25, {top: '0%', right: '20%'}, {top: '20%', right: '40%'}, '-=0.20')
  .fromTo('.i-5', .25, {top: '8%', left: '15%'}, {top: '20%', left: '43%'}, '-=0.20')
  .fromTo('.i-9', .25, {top: '2%', right: '4%'}, {top: '13.3%', right: '49%'}, '-=0.20')
  .fromTo('.i-10', .25, {top: '2%', right: '30%'}, {top: '20%', right: '43.5%'}, '-=0.20');

  var play = function(){
    return tm.play();
  }

  var reverse = function(){
    return tm.reverse();
  }

  var start = function(){
    //main home page animation-------------------
    var tl = new TimelineMax({delay: 2.2, ease: Back.easeOut});
    return tl.fromTo('#home h1', 0.75, {left: '250%', boxShadow: '1500px 0px 0px inset #050505', color: '#050505'}, {left: '0', boxShadow: '1500px 0px 0px inset #050505', color: '#050505', ease: Back.easeOut})
     .to('#home h1', 0.5, {boxShadow: '0px 0px 0px inset #050505', color: '#d9d9d9', textShadow: `0 1px 0 hsl(174,5%,80%),
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
 	              0 20px 20px rgba(0,0,0,.3)`, delay: .2}, '+=.5')
    .fromTo('#home p, #home button, .line', 1, {opacity: 0,  ease:Bounce.easeOut, scale: 0.2}, {opacity: 1,  scale: 1}, '-=.75')
     .to('#home p', 0.5, {opacity: 1, boxShadow: '0px 0px 0px inset #050505', color: '#ddd'})
    .to('.line .one', 3, {x: 150, repeat: -1, yoyo: true, ease: Back.easeOut})
     .to('.line .two', 3, {x: -50, repeat: -1, yoyo: true, ease: Back.easeOut}, '-=2.5');
     //----------------------------------------------------------------
  }

  return {
    start: start,
    play: play,
    reverse: reverse
  }
})();


export default animations;
