import React from 'react'
import {TimelineMax} from "gsap/TweenMax";

class Bar extends React.Component{
  constructor(props){
    super(props);
    this.animate = this.animate.bind(this);
  }

  animate(){
    let  shadow = this.props.width + ' 0px inset ' + '#CD7635';
    let  id = '#' + this.props.id + ' .shadow';
    let tl = new TimelineMax({delay: 1.6});
    tl.to(id, 0.8,{boxShadow: shadow}).repeat(0);
  }

  //animate when intially rendered
  componentDidMount(){
    this.animate();
  }

  //animate on each project update
  componentDidUpdate(){
    this.animate();
  }


  render(){
    return(
      <div id={this.props.id} className='bar'>
        <p>{this.props.name}</p>
        <div className='shadow' />
       </div>
    )
  }
}

export default Bar;
