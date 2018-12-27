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

        <p class='anim'> A passionate front end developer, a self learner, who aims to bring perfection in design and efficiency within each project taken. I target a great user experience through a creative visual design in my work.<br />  My mantra for work would be  'Learn, Use, Research and Improve'.</p>
        <hr class='anim'/>
         <h3 class='anim' id='head'>SKILLS AND ABILITIES</h3>

        <p class='anim skills'>HTML5, CSS3, jQuery, Javascript, React, Sass, Bootstrap, Redux, Java,  Git, Git Hub, Three, GSAP, Command line Experience,  Adobe Illustrator and Photoshop, Working with Browser developer tools for debugging, optimized Images for web, creating Responsive and Cross Browser Compatible designs, FontAwesome, Devicon, Atom.</p>

         <div class='container'>
           {arr}
         </div>
      </section>
    )
  }
}
export default About;
