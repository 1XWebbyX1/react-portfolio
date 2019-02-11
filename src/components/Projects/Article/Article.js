import React from 'react'
import src from './data/imageStrings'
import markdown from './data/images/markdown.png'
import projects from './data/projectsData.js'
import {TimelineMax, Elastic} from "gsap/TweenMax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode,faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import Arrow from './Arrow/Arrow.js'
import Graph from './Graph/Graph.js'

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
      github: function() {return projects[this.index].github},
      image: markdown,
      leftOpacity: 'transparent',
      rightOpacity: 'opaque'
    }
     this.handleNext = this.handleNext.bind(this);
     this.handlePrev = this.handlePrev.bind(this);
     this.handleLoad = this.handleLoad.bind(this);
     this.animateChange = this.animateChange.bind(this);
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
    if(this.state.index <=8 ){ // if not last project
       this.animateChange();
         this.setState({
           index: this.state.index + 1,
           leftOpacity: 'opaque',
           rightOpacity: 'opaque'
       });
       setTimeout(function(){
         import('' + this.state.src())
         .then(src => {
           this.setState({image: src.default});
         })
       }.bind(this), 200);
    }
    if(this.state.index === 8){
      this.setState({
        leftOpacity: 'opaque',
        rightOpacity: 'transparent'
      })
    }
 }

 handleLoad(){
   console.log('loaded');
   var tl = new TimelineMax();
    tl.fromTo('#project', 0.4 ,{filter: 'blur(45px)'}, {filter: 'blur(0px)'});
 }

  //on prev button click
  handlePrev(){
      if(this.state.index >= 1){ //if not first project
          this.animateChange();
         this.setState({
         index: this.state.index - 1,
         leftOpacity: 'opaque',
         rightOpacity: 'opaque'
       });
       setTimeout(function(){
         import('' + this.state.src())
         .then(src => {
            this.setState({image: src.default});
         })
       }.bind(this), 200);
    }
    if(this.state.index === 1){
      this.setState({
        leftOpacity: 'transparent',
        rightOpacity: 'opaque'
      })
    }
  }

  render(){
    return(
      <div>
        <h1 className='anim'>{this.state.project()}</h1>

        <div className='small-icon'>
         <div className='holder'  onClick={this.handlePrev}><FontAwesomeIcon className={"icon-s " + this.state.leftOpacity}  icon={faArrowCircleLeft}/></div>
            <p className='anim'>A {this.state.details()}, designed and coded by following an iterative approach. The Project used <span className='highlight'>{this.state.description()}</span>. The design is responsive and has wide browser support.</p>
          <div className='holder'  onClick={this.handleNext}><FontAwesomeIcon className={"icon-s "+ this.state.rightOpacity}  onClick={this.handleNext} icon={faArrowCircleRight}/></div>
        </div>

        <div className='slider anim'>
          <Arrow id='left' direction={faArrowCircleLeft} onClick={this.handlePrev} opacity={this.state.leftOpacity}/>
        <figure className='inner'>
          <div className='mask' />
            <img id='project' src={this.state.image} onLoad={this.handleLoad} alt='project-img'/>
            <Graph src={this.state.graph()}/>
        </figure>
           <Arrow id='right' direction={faArrowCircleRight} onClick={this.handleNext} opacity={this.state.rightOpacity}/>
        </div>

        <div id='buttons' >
            <a href={this.state.code()} target='_blank' rel="noopener noreferrer"><button className='code-pen button anim-butt '>View the Code <FontAwesomeIcon icon={faLaptopCode}/></button></a>
            <a href={this.state.github()} target='_blank' rel="noopener noreferrer"><button className='git-hub button anim-butt'>View the Demo <FontAwesomeIcon icon={faGithub} /></button></a>
        </div>
      </div>
    )
  }
}


export default Article;
