import React from 'react'
import icons from './data/icons'
import Widget from './Widget/Widget.js'
import InfoHolder from './InfoHolder/InfoHolder.js'
import {TweenMax} from "gsap/TweenMax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      introVisibility : 'visible',
      skillsVisibility : 'hidden',
      aboutSvgVisibility : 'visible',
      skillsSvgVisibility : 'hidden',
      head: 'INTRODUCTION'
    }
    this.showSkills = this.showSkills.bind(this);
    this.showIntro = this.showIntro.bind(this);
  }

  showSkills(){
    this.setState({
      introVisibility : 'hidden',
      skillsVisibility : 'visible',
      aboutSvgVisibility : 'hidden',
      skillsSvgVisibility : 'visible',
      head: 'SKILLS AND ABILITIES'
    })
    TweenMax.staggerFromTo('.card', 0.5, {x: 1000}, {x: 0}, 0.01);
    TweenMax.fromTo('#svgs', 2, {rotationY: 0, transformOrigin:"center"}, {rotationY: 180, transformOrigin:"center"}).yoyo(true);
  }

  showIntro(){
    this.setState({
      introVisibility : 'visible',
      skillsVisibility : 'hidden',
      aboutSvgVisibility : 'visible',
      skillsSvgVisibility : 'hidden',
      head : 'INTRODUCTION'
    })
    TweenMax.fromTo('#intro-p', 0.5, {y: 40}, {y: 0});
    TweenMax.fromTo('#svgs', 2, {rotationY: 0, transformOrigin:"center"}, {rotationY: 180, transformOrigin:"center"}).yoyo(true);
  }

  render(){
      var arr = icons.map((a) => {
          return <FontAwesomeIcon className={a.class} icon={a.icon} />
        });

    return(
     <section id='about'>
         <h3 id='head' className='anim'>{this.state.head}</h3>
         <h1 className='anim'>About Me</h1>
         <div className='information'>
            <Widget aboutSvgVisibility={this.state.aboutSvgVisibility} skillsSvgVisibility={this.state.skillsSvgVisibility}/>
            <InfoHolder introVisibility={this.state.introVisibility} skillsVisibility={this.state.skillsVisibility} showIntro={this.showIntro} showSkills={this.showSkills} />
         </div>
         <div className='container'>
           {arr}
          </div>
     </section>
    )
  }
}
export default About;
