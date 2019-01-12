import React from 'react'
import icons from './icons'
import $ from 'jquery'
import AboutSvg from './AboutSvg'
import SkillsSvg from './SkillsSvg'
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
         <div class='widget-icons'>
         <div id='title-circle'>
         <div id='svgs'>
         <AboutSvg />
         <SkillsSvg />
         </div>
        </div>
         <div class='line'>
             <div class='in-line one'/>
             <div class='in-line two'/>
         </div>
         </div>
         <div id='display-card' class='anim'>
          <div class='content'>
          <article id='intro'>
           <p id='intro-p'> A passionate front end developer, a self learner, who aims to bring perfection in design and efficiency within each project taken. I target a great user experience through a creative visual design and high web performance in my work. I am currently looking for a challenging environment to enhance my skills.<br /><br />  My mantra for work would be  'Learn, Use, Research and Improve'.</p>
           <button id='intro-button' class='button' onClick={this.showSkills}> Unlock my Skills </button>
           </article>
           <article id='skills'>
            <div class='row'>
            <div class='card'>
              <h3>Core</h3>
              <hr />
              <p>HTML<br />CSS<br />Javascript</p>
            </div>
            <div class='card'>
              <h3>JS Frameworks</h3>
              <hr />
              <p>React<br />Redux</p>
            </div>
            <div class='card'>
              <h3>JS libraries</h3>
              <hr />
              <p>jQuery<br />Three<br />GSAP</p>
            </div>
            <div class='card'>
              <h3>CSS <br/>Framework  and Preprocessor</h3>
              <hr />
              <p>Bootstrap<br />Sass</p>
            </div>
            <div class='card'>
              <h3>Package Manager and <br />Module Loader/Bundler</h3>
              <hr />
              <p>npm<br />webpack</p>
            </div>
            {/*</div>
            <div class='row'>*/}
            <div class='card'>
              <h3>Task Runners</h3>
              <hr />
              <p>npm scripts<br />gulp</p>
            </div>
            <div class='card'>
              <h3>Version Control System</h3>
              <hr />
              <p>git<br />git hub</p>
            </div>
            <div class='card'>
              <h3>Knowledge of</h3>
              <hr />
              <p> ES6<br /> Responsive design<br /> Cross browser compatiblity<br /> good web performance including SEO principles and Acessibility<br /> working with command line</p>
            </div>
            <div class='card'>
              <h3>Tools</h3>
              <hr />
              <p>Adobe Illustrator and Photoshop<br /> Atom<br /> working with Browser developer tools for debugging<br /> optimized Images for web</p>
            </div>
            <div class='card'>
              <h3>More</h3>
              <hr />
              <p>Java<br /> FontAwesome<br /> Devicon</p>
            </div>
            </div>
            <button id='skills-button' class='button' onClick={this.showIntro}> Back to Introduction </button>
            </article>
          </div>
         </div>
         </div>
         <div class='container'>
           {arr}
         </div>

      </section>
    )
  }
}
export default About;
