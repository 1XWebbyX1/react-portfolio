import React from 'react'
import { faCodepen, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import Card from './Card/Card.js'


class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      image: ''
    };
  }

  componentWillMount(){
     import('./image/background.jpg')
     .then(src => {
       this.setState({image: src.default});
     })
   }

  render(){
    return(
      <section id='contact'>
        <h3 class='anim'>GET IN TOUCH</h3>
        <h1 class='anim'>Contact</h1>

        <div class='wrapper anim'>
          <Card id='email' icon={faEnvelope} text='khayatiasrani@gmail.com' button='Email' link='mailto:khayatiasrani@gmail.com'/>
          <Card id='git' icon={faGithub} text='https://github.com/1XWebbyX1' button='GitHub Profile' link='https://github.com/1XWebbyX1'/>
          <Card id='codepen' icon={faCodepen} text='https://codepen.io/1xwebbyx1/' button='Codepen Profile' link='https://codepen.io/1xwebbyx1/'/>
        </div>

        <div class='snap-wrap'>
         <figure id='snap'>
           <img id ='background' src={this.state.image} alt='sea background'/>
         </figure>
      </div>
        <p>Copyright 2018 Khayati Asrani | All Rights Reserved</p>
      </section>
    )
  }
}

export default Contact;
