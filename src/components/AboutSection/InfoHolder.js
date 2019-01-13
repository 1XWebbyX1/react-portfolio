import React from 'react'
//import asyncComponent from '../asyncComponent/async'

import Cards from './Cards'
/*const Cards = asyncComponent(() =>
    	    import('./Cards').then(module => module.default)
    	);*/

class InfoHolder extends React.Component {
  render(){
    return(
      <div id='display-card' class='anim'>
         <div class='content'>
            <article id='intro'>
                <p id='intro-p'> I am a passionate, ambitious and a self learning web developer who loves to convert ideas into beautiful and creative UI/UX designs, that are packed with high web performance and serve great interactive user experience. I seek a challenging environment to advance my professional and personal life skills.<br /><br />  My mantra for work would be  'Learn, Use, Research and Improve'.</p>
                <button id='intro-button' class='button' onClick={this.props.showSkills}> Unlock my Skills </button>
            </article>
            <article id='skills'>
                <Cards />
                <button id='skills-button' class='button' onClick={this.props.showIntro}> Back to Introduction </button>
            </article>
         </div>
     </div>
    )
  }
}


export default InfoHolder;
