import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery'
import "@babel/polyfill";


ReactDOM.render(<App />, document.getElementById('root'));




 $(document).ready(function(){
   alert("Now visit this site at https://khayatiasrani.com/ :)");
  setTimeout(function(){
    import('./animation_modules/canvas')
   .then(module => {
     //display app after load--------
     $('#loader').css('display', 'none');
     $('#root').css('display', 'block');
     //canvas homepage animation
      module.default.start();
    })
    .then(function(){

         //GSAP for animations_____________________________________________________________________________________

         import('./animation_modules/gsapAnimations')
         .then(module => {
            module.default.start();
           $('#intro-button').click(() => {
             module.default.play();
           })
           $('#skills-button').click(() => {
             module.default.reverse();
           })

      import('./animation_modules/jqueryTransitions')
      .then(module => {
        module.default.start();
      });

    });

    //scroll animations with debouncing---------------------------------------
    import('./animation_modules/scrollAnimations')
    .then(module => {
      $(window).scroll(module.default.onScroll);
    });
    })

  }, 1500);

});
