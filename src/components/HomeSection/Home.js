import React from 'react'
import asyncComponent from '../asyncComponent/async';
import $ from 'jquery'


//dynamic import
const Lines = asyncComponent(() =>
    	    import('./Lines').then(module => module.default)
    	);



class Home extends React.Component{

  constructor(props){
    super(props);
    this.scrollToProjects = this.scrollToProjects.bind(this);
    this.scrollToAbout = this.scrollToAbout.bind(this);
  }

 scrollToProjects(){
   $('html, body').animate({
                    scrollTop: $('#projects').offset().top
                }, 500);
 }

  scrollToAbout(){
   $('html, body').animate({
                    scrollTop: $('#about').offset().top
                }, 500);
 }

  render(){
    return(
      <section id='home'>
        <canvas id="map"></canvas>
        <h1>Khayati Asrani</h1>
        <p> Front End Developer</p>
        <Lines id='line-0'/>
        <button id='project-btn' onClick={this.scrollToProjects}>Projects</button>
        <button id='about-btn' onClick={this.scrollToAbout}>About</button>
        <Lines id='line-1'/>
        <Lines id='line-2'/>
      </section>
    )
  }
}


export default Home;
