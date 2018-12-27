import React from 'react'
import asyncComponent from '../asyncComponent/async'

const Bar = asyncComponent(() =>
    	    import('./Bar').then(module => module.default)
    	);

class Graph extends React.Component{
  render(){
    var arr = this.props.src; //get graph for current project
    var i = 1;
    var bars = arr.map((a) => {
      var id = 'bar-' + i;
      i++;
      return <Bar id={id} name={a.name} src={this.props.src}/>
    })
    return(
      <div class='graph'>
        {bars}
       </div>
    )
  }
}

export default Graph;
