import React from 'react'
import asyncComponent from '../asyncComponent/async'

const Article = asyncComponent(() =>
    	    import('./Article').then(module => module.default)
    	);

class Projects extends React.Component{
  render(){
    return(
      <section id='projects'>
        <h3>PROJECT</h3>
        <Article />
      </section>
    )
  }
}

export default Projects;
