import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery'
import "@babel/polyfill";


ReactDOM.render(<App />, document.getElementById('root'));




  setTimeout(function(){
    //cnvas homepage animation
    import('./animation_modules/canvas')
   .then(module => {
    module.default.start();
    })
    .then(function(){
      import('./animation_modules/jqueryTransitions')
      .then(module => {
        module.default.start();
      });

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
    });

    //scroll animations with debouncing---------------------------------------
    import('./animation_modules/scrollAnimations')
    .then(module => {
      $(window).scroll(module.default.onScroll);
    });
    })



 }, 8000);
