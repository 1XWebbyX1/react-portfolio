import React from 'react'
import {ReactComponent as AboutSvg} from '../data/SVG/AboutSvg.svg'
import {ReactComponent as SkillsSvg} from '../data/SVG/SkillsSvg.svg'

class Widget extends React.Component {
  render(){
    return(
      <div className='widget-icons'>
         <div id='title-circle' className='bounce'>
            <div id='svgs'>
              <AboutSvg className={this.props.aboutSvgVisibility}/>
              <SkillsSvg className={this.props.skillsSvgVisibility}/>
            </div>
         </div>
         <div className='line'>
            <div className='in-line one'/>
            <div className='in-line two'/>
         </div>
       </div>
    )
  }
}


export default Widget;
