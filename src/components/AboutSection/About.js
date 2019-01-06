import React from 'react'
import icons from './icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class About extends React.Component{
  render(){
    // loop through icons arr to create i elements
    var arr = icons.map((a) => {
      return <FontAwesomeIcon className={a.class} icon={a.icon} />
    });

    return(
     <section id='about'>
         <h3 class='anim'>Introduction</h3>
         <h1 class='anim'>About Me</h1>

        <p class='anim'> A passionate front end developer, a self learner, who aims to bring perfection in design and efficiency within each project taken. I target a great user experience through a creative visual design and high web performance in my work. I am currently looking for a challenging environment to enhance my skills.<br />  My mantra for work would be  'Learn, Use, Research and Improve'.</p>
        <hr class='anim'/>
         <h3 class='anim' id='head'>SKILLS AND ABILITIES</h3>

        <p class='anim skills'>HTML5, CSS3, Javascript, React, Redux, Bootstrap, Sass <br />jQuery, Three.js, GSAP <br /> gulp, npm scripts, npm, webpack <br /> Git, Git Hub <br />
        Knowledge of ES6, responsive design, cross browser compatiblity, good web performance including SEO principles and Acessibility<br /> working with command line <br /> Adobe Illustrator and Photoshop, Atom, working with Browser developer tools for debugging, optimized Images for web <br /> Java, FontAwesome, Devicon .</p>

         <div class='container'>
           {arr}
         </div>
      </section>
    )
  }
}
export default About;
