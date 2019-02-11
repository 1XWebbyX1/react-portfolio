import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends React.Component{
  render(){
    return(
      <div class='card' id={this.props.id}>
            <FontAwesomeIcon icon={this.props.icon} className='icon' />
            <p>{this.props.text}</p>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button>{this.props.button}</button></a>
      </div>
    )
  }
}

export default Card;
