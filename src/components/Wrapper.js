import React from 'react'
import asyncComponent from './asyncComponent/async'

import Home from './Home/Home.js'

const Projects = asyncComponent(() =>
     import('./Projects/Projects.js').then(module => module.default)
	);

  const About = asyncComponent(() =>
       import('./About/About.js').then(module => module.default)
  	);

  const Contact = asyncComponent(() =>
         import('./Contact/Contact.js').then(module => module.default)
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
