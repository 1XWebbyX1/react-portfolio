import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Arrow extends React.Component{
  render(){
    return(
      <div id={this.props.id} class='arrow' onClick={this.props.onClick}>
        <div class='outer-circle '>
          <div class='inner-circle '>
            <FontAwesomeIcon icon={this.props.direction }  className='icon'  onClick={this.props.onClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default Arrow;
