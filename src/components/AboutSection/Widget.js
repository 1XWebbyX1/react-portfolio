import React from 'react'
//import asyncComponent from '../asyncComponent/async'

import AboutSvg from './AboutSvg'
import SkillsSvg from './SkillsSvg'

/*const AboutSvg = asyncComponent(() =>
    	    import('./AboutSvg').then(module => module.default)
    	);
const SkillsSvg = asyncComponent(() =>
         import('./SkillsSvg').then(module => module.default)
    );*/

class Widget extends React.Component {
  render(){
    return(
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
    )
  }
}


export default Widget;
