import React from 'react'

class Lines extends React.Component{
  render(){
    return(
      <div class='line' id={this.props.id}>
          <div class='in-line one'/>
          <div class='in-line two'/>
      </div>
    )
  }
}

export default Lines;
