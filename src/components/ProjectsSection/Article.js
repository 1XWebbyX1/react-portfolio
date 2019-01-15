import React from 'react'
import $ from 'jquery'
import src from './data/imageStrings'
import markdown from './data/images/markdown.png'
import projects from './data/projectsData.js'
import {TimelineMax, Elastic} from "gsap/TweenMax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode,faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import Arrow from './Arrow'
import Graph from './Graph'

class Article extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      project: function() {return projects[this.index].project},
      details: function() {return projects[this.index].details},
      description: function() {return projects[this.index].description},
      src: function() {return src[this.index]},
      graph: function() {return projects[this.index].graph},
      code: function() {return projects[this.index].code},
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
    var x = window.matchMedia("(max-width: 800px)"); //for tablets screen and below
    var height;
    if (x.matches) { // If media query matches
     height = 'auto';
    } else {
      height = '350px';
    }

   var tl = new TimelineMax({delay: 0.3, repeat: 1, repeatDelay: 0.2, yoyo: true, ease: Elastic.easeOut});
   tl.fromTo('.arrow', 0.4 ,{visibility: 'visible'}, {visibility: 'hidden'}, '-=0.4')
    .fromTo('.mask', 0.2, {boxShadow: '0px 0px 0px inset #CA7564'}, {boxShadow: '0px -350px 0px inset #CA7564'})
    .fromTo('.graph', 0.2, {height: '45%'}, {height: '0px'}, '-=0.25')
    .fromTo('.inner img, .inner .mask', 0.5, {height: height}, {height: '175px', boxShadow: '0px -350px 0px inset #212121	'});
  }

  //on next button click
  handleNext(){
    if(this.state.index <=7 ){ // if not last project
       this.animateChange();
         this.setState({
           index: this.state.index + 1
       });
       $('.inner #project').css('filter', 'blur(45px)');
       setTimeout(function(){
         import('' + this.state.src())
         .then(src => {
           $('#project').attr('src', src.default);
         }).then(() => {
           $('.inner img').on('load', function() {
             var tl = new TimelineMax();
              tl.fromTo('#project', 0.4 ,{filter: 'blur(45px)'}, {filter: 'blur(0px)'});
            });
         })
       }.bind(this), 200);
    }
 }

  //on prev button click
  handlePrev(){
      if(this.state.index >= 1){ //if not first project
          this.animateChange();
         this.setState({
         index: this.state.index - 1
       });
       setTimeout(function(){
         import('' + this.state.src())
         .then(src => {
           $('#project').attr('src', src.default);
         })
       }.bind(this), 200);
    }
  }

  //update button opacity
  componentDidUpdate(){
    if(this.state.index < 1){
      $('.fa-arrow-circle-left').css('opacity', '0.1');
      $('.fa-arrow-circle-right').css('opacity', '1');
    }
    else if(this.state.index > 7){
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
            <p class='anim'>A {this.state.details()}, designed and coded by following an iterative approach. The Project used <span class='highlight'>{this.state.description()}</span>. The design is responsive and has wide browser support.</p>
          <div class='holder'  onClick={this.handleNext}><FontAwesomeIcon className="icon-s"  onClick={this.handleNext} icon={faArrowCircleRight}/></div>
        </div>

        <div class='slider anim'>
          <Arrow id='left' direction={faArrowCircleLeft} onClick={this.handlePrev}/>
        <figure class='inner'>
          <div class='mask' />
            <img id='project' src={markdown} alt='project-img'/>
            <Graph src={this.state.graph()}/>
        </figure>
           <Arrow id='right' direction={faArrowCircleRight} onClick={this.handleNext}/>
        </div>

        <div id='buttons' >
            <a href={this.state.code()} target='_blank' rel="noopener noreferrer"><button class='code-pen button anim-butt '>View the Code <FontAwesomeIcon icon={faLaptopCode}/></button></a>
            <a href={this.state.github()} target='_blank' rel="noopener noreferrer"><button class='git-hub button anim-butt'>View the Demo <FontAwesomeIcon icon={faGithub} /></button></a>
        </div>
      </div>
    )
  }
}


export default Article;
