import React from 'react'
import Cards from './Cards/Cards.js'

class InfoHolder extends React.Component {
  render(){
    return(
      <div id='display-card' className='anim'>
         <div className='content'>
            <article id='intro' className={this.props.introVisibility}>
                <p id='intro-p'> I am a passionate, ambitious and a self learning web developer who loves to convert ideas into beautiful and creative UI/UX designs, that are packed with high web performance and serve great interactive user experience. I seek a challenging environment to advance my professional and personal life skills.<br /><br />  My mantra for work would be  'Learn, Use, Research and Improve'.</p>
                <button id='intro-button' className='button' onClick={this.props.showSkills}> Unlock my Skills </button>
            </article>
            <article id='skills' className={this.props.skillsVisibility}>
                <Cards />
                <button id='skills-button' className='button' onClick={this.props.showIntro}> Back to Introduction </button>
            </article>
         </div>
     </div>
    )
  }
}


export default InfoHolder;
