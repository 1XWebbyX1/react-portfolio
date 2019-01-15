import React from 'react'
import asyncComponent from './asyncComponent/async'

import Home from './HomeSection/Home'

const Projects = asyncComponent(() =>
     import('./ProjectsSection/Projects').then(module => module.default)
	);

  const About = asyncComponent(() =>
       import('./AboutSection/About').then(module => module.default)
  	);

  const Contact = asyncComponent(() =>
         import('./ContactSection/Contact').then(module => module.default)
  	);

class Wrapper extends React.Component{
  render(){
    return(
      <div>
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    )
  }
}


export default Wrapper;
