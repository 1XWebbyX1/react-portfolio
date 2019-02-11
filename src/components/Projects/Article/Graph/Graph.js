import React from 'react'
import Bar from './Bar/Bar.js'

class Graph extends React.Component{
  render(){
    var arr = this.props.src; //get graph for current project
    var i = 1;
    var bars = arr.map((a) => {
      var id = 'bar-' + i;
      i++;
      return <Bar id={id} name={a.name} width={a.width}/>
    })
    return(
      <div className='graph'>
        {bars}
       </div>
    )
  }
}

export default Graph;
