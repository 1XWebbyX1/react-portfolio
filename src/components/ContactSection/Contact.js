import React from 'react'
import asyncComponent from '../asyncComponent/async';
import { faCodepen, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'

const Card = asyncComponent(() =>
    	    import('./Card').then(module => module.default)
    	);

class Contact extends React.Component{

  render(){
    return(
      <section id='contact'>
        <h3 class='anim'>Get in Touch</h3>
        <h1 class='anim'>Contact</h1>

        <div class='wrapper anim'>
          <Card id='email' icon={faEnvelope} text='khayatiasrani@gmail.com' button='Email' link='mailto:khayatiasrani@gmail.com'/>
          <Card id='codepen' icon={faCodepen} text='https://codepen.io/1xwebbyx1/' button='Codepen Profile' link='https://codepen.io/1xwebbyx1/'/>
          <Card id='git' icon={faGithub} text='https://github.com/1XWebbyX1' button='GitHub Profile' link='https://github.com/1XWebbyX1'/>
        </div>

        <div class='snap-wrap'>
         <figure id='snap'>
           <img src='https://i.ibb.co/mH3cvXx/mike-wilson-48019-unsplashedited.jpg' alt='sea background'/>
         </figure>
      </div>
        <p>Copyright 2018 Khayati Asrani, All Rights Reserved</p>
      </section>
    )
  }
}

export default Contact;
