import React from 'react'
//import asyncComponent from '../asyncComponent/async';
import { faCodepen, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import Card from './Card'


class Contact extends React.Component{

  componentDidMount(){
     import('./background.jpg')
     .then(src => {
       document.getElementById("background").src= src.default;
     })
   }

  render(){
    return(
      <section id='contact'>
        <h3 class='anim'>Get in Touch</h3>
        <h1 class='anim'>Contact</h1>

        <div class='wrapper anim'>
          <Card id='email' icon={faEnvelope} text='khayatiasrani@gmail.com' button='Email' link='mailto:khayatiasrani@gmail.com'/>
          <Card id='git' icon={faGithub} text='https://github.com/1XWebbyX1' button='GitHub Profile' link='https://github.com/1XWebbyX1'/>
          <Card id='codepen' icon={faCodepen} text='https://codepen.io/1xwebbyx1/' button='Codepen Profile' link='https://codepen.io/1xwebbyx1/'/>
        </div>

        <div class='snap-wrap'>
         <figure id='snap'>
           <img id ='background' src='' alt='sea background'/>
         </figure>
      </div>
        <p>View <a href='https://github.com/1XWebbyX1/react-portfolio' target="_blank" rel="noopener noreferrer">code</a> for this project.<br/>Copyright 2018 Khayati Asrani, All Rights Reserved</p>
      </section>
    )
  }
}

export default Contact;
