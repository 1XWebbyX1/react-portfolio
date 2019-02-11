import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Arrow extends React.Component{
  render(){
    return(
      <div id={this.props.id} className={'arrow ' + this.props.opacity} onClick={this.props.onClick}>
        <div className='outer-circle '>
          <div className='inner-circle '>
            <FontAwesomeIcon icon={this.props.direction }  className='icon'  onClick={this.props.onClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default Arrow;
