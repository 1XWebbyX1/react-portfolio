import React from 'react'
import icons from './data/icons'
import $ from 'jquery'
import Widget from './Widget'
import InfoHolder from './InfoHolder'
import {TweenMax} from "gsap/TweenMax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class About extends React.Component{
  constructor(props){
    super(props);
    this.showSkills = this.showSkills.bind(this);
    this.showIntro = this.showIntro.bind(this);
  }

  showSkills(){
    $('#intro').css('display', 'none');
    $('#skills').css('display', 'block');
    $('#about-svg').css('display', 'none');
    $('#skills-svg').css('display', 'block');
    $('#about #head').text('SKILLS AND ABILITIES');
    //$('.container .icon').css('visibility', 'hidden');
    TweenMax.staggerFromTo('.card', 0.5, {x: 1000}, {x: 0}, 0.01);
    TweenMax.fromTo('#svgs', 2, {rotationY: 0, transformOrigin:"center"}, {rotationY: 180, transformOrigin:"center"}).yoyo(true);
  }

  showIntro(){
    $('#intro').css('display', 'block');
    $('#skills').css('display', 'none');
    $('#about-svg').css('display', 'block');
    $('#skills-svg').css('display', 'none');
    $('#about #head').text('INTRODUCTION');
    //$('.container .icon').css('visibility', 'visible');
    TweenMax.fromTo('#intro-p', 0.5, {y: 40}, {y: 0});
    TweenMax.fromTo('#svgs', 2, {rotationY: 0, transformOrigin:"center"}, {rotationY: 180, transformOrigin:"center"}).yoyo(true);
  }

  render(){
    // loop through icons arr to create i elements
    var arr = icons.map((a) => {
      return <FontAwesomeIcon className={a.class} icon={a.icon} />
    });

    return(
     <section id='about'>
         <h3 id='head' class='anim'>Introduction</h3>
         <h1 class='anim'>About Me</h1>
         <div class='information'>
            <Widget />
            <InfoHolder showIntro={this.showIntro} showSkills={this.showSkills} />
         </div>
         <div class='container'>
           {arr}
          </div>
     </section>
    )
  }
}
export default About;
