import React from 'react'
import Lines from './Line/Lines.js'

class Home extends React.Component{
  render(){
    return(
      <section id='home'>
        <canvas id="map"></canvas>
        <h1>Khayati Asrani</h1>
        <p> Front End Developer</p>
        <Lines id='line-0'/>
        <a href='#projects'><button id='project-btn'>Projects</button></a>
        <a href='#about'><button id='about-btn'>About</button></a>
        <Lines id='line-1'/>
        <Lines id='line-2'/>
      </section>
    )
  }
}


export default Home;
