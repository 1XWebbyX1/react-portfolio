import React from 'react'
import AboutSvg from './AboutSvg'
import SkillsSvg from './SkillsSvg'

class Widget extends React.Component {
  render(){
    return(
      <div class='widget-icons'>
         <div id='title-circle' class='bounce'>
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
    )
  }
}


export default Widget;
