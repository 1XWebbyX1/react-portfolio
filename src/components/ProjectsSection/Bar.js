import React from 'react'
import $ from 'jquery'
import {TimelineMax} from "gsap/TweenMax";

class Bar extends React.Component{
  constructor(props){
    super(props);
    this.createGraph = this.createGraph.bind(this);
    this.animate = this.animate.bind(this);
  }

  animate(){
    var  shadow = this.createGraph() + ' 0px inset ' + '#CD7635';
     $('#' + this.props.id + ' .shadow').css('box-shadow', shadow);
    var  id = $('#' + this.props.id + ' .shadow');
    var tl = new TimelineMax({delay: 1.6});
    tl.fromTo(id, 0.8, {boxShadow: '0px 0px inset #CD7635'}, {boxShadow: shadow});
  }

  createGraph(){
    var width;
    var object = this.props.src; //get current project graph
     switch(this.props.name){ //find width for current bar
       case object[0].name : width = object[0].width;
                                      break;
       case object[1].name : width = object[1].width;
                                break;
       case object[2].name : width = object[2].width;
                                break;
       case object[3].name : width = object[3].width;
                                break;
       default : return; 
     }
    return width;
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
      <div id={this.props.id} class='bar'>
        <p>{this.props.name}</p>
        <div class='shadow' />
       </div>
    )
  }
}

export default Bar;
