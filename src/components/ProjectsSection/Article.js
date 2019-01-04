import React from 'react'
import asyncComponent from '../asyncComponent/async'
import $ from 'jquery'
import src from './dataObjects/fallback'
import projects from './dataObjects/projectsData.js'
import {TimelineMax, Elastic} from "gsap/TweenMax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'


const Arrow = asyncComponent(() =>
    	    import('./Arrow').then(module => module.default)
    	);

const Graph = asyncComponent(() =>
           import('./Graph').then(module => module.default)
        );

class Article extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      arr: src,
      project: function() {return projects[this.index].project},
      description: function() {return projects[this.index].description},
      src: function() {return this.arr[this.index]},
      graph: function() {return projects[this.index].graph},
      codepen: function() {return projects[this.index].codepen},
      github: function() {return projects[this.index].github}
    }
     this.handleNext = this.handleNext.bind(this);
     this.handlePrev = this.handlePrev.bind(this);
     this.animateChange = this.animateChange.bind(this);
   }

  //disable previous button initially
  componentDidMount(){
    $('.fa-arrow-circle-left').css('opacity', '0.1');

  }


  //animation between transition
  animateChange(){
    var x = window.matchMedia("(max-width: 800px)");
    var height;
    if (x.matches) { // If media query matches
     height = 'auto';
    } else {
      height = '350px';
    } // Call listener function at run time

   var tl = new TimelineMax({delay: 0.3, repeat: 1, repeatDelay: 0.2, yoyo: true, ease: Elastic.easeOut});
   tl.fromTo('.arrow', 0.4 ,{visibility: 'visible'}, {visibility: 'hidden'}, '-=0.4')
    .fromTo('.mask', 0.2, {boxShadow: '0px 0px 0px inset #CA7564'}, {boxShadow: '0px -350px 0px inset #CA7564'})
    .fromTo('.graph', 0.2, {height: '45%'}, {height: '0px'}, '-=0.25')
    .fromTo('.inner img, .inner .mask', 0.5, {height: height}, {height: '175px', boxShadow: '0px -350px 0px inset #212121	'});
  }

  //on next button click
  handleNext(){
    if(this.state.index <=8 ){ // if not last project
       this.animateChange();
         this.setState({
           index: this.state.index + 1
       });
     }
 }

  //on prev button click
  handlePrev(){
      if(this.state.index >= 1){ //if not first project
          this.animateChange();
         this.setState({
         index: this.state.index - 1
       });
      }
  }

  //update button opacity
  componentDidUpdate(){
    if(this.state.index < 1){
      $('.fa-arrow-circle-left').css('opacity', '0.1');
      $('.fa-arrow-circle-right').css('opacity', '1');
    }
    else if(this.state.index > 8){
       $('.fa-arrow-circle-left').css('opacity', '1');
       $('.fa-arrow-circle-right').css('opacity', '0.1');
    }else{
       $('.fa-arrow-circle-left').css('opacity', '1');
      $('.fa-arrow-circle-right').css('opacity', '1');
    }
  }


  render(){
    return(
      <div>
        <h1 class='anim'>{this.state.project()}</h1>

        <div class='small-icon'>
         <div class='holder'  onClick={this.handlePrev}><FontAwesomeIcon className="icon-s" icon={faArrowCircleLeft}/></div>
            <p class='anim'>A {this.state.project()} created by fulfilling user stories at freeCodeCamp. The Project used <span class='highlight'>{this.state.description()}</span>. The design is fully responsive and cross-browser compatible.</p>
          <div class='holder'  onClick={this.handleNext}><FontAwesomeIcon className="icon-s"  onClick={this.handleNext} icon={faArrowCircleRight}/></div>
        </div>

        <div class='slider anim'>
          <Arrow id='left' direction={faArrowCircleLeft} onClick={this.handlePrev}/>
        <figure class='inner'>
          <div class='mask' />
            <img src={this.state.src()} alt='project-img'/>
            <Graph src={this.state.graph()}/>
        </figure>
           <Arrow id='right' direction={faArrowCircleRight} onClick={this.handleNext}/>
        </div>

        <div id='buttons' >
            <a href={this.state.codepen()} target='_blank' rel="noopener noreferrer"><button class='code-pen button anim-butt '>View on CodePen <FontAwesomeIcon icon={faCodepen}/></button></a>
            <a href={this.state.github()} target='_blank' rel="noopener noreferrer"><button class='git-hub button anim-butt'>View on GitHub <FontAwesomeIcon icon={faGithub} /></button></a>
        </div>
      </div>
    )
  }
}


export default Article;
