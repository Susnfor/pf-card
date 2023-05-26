import React from 'react'
import '../styles/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
  return (
    <div className="Card">
    <div className="Card-container">
      <div className="Card-banner">
      
      <div className="Card-icon"><FontAwesomeIcon icon={props.icons} /></div>
            
      <div><header>{props.title}</header>
            <p>{props.desc}</p>
      </div>


        </div>
      
      </div>
    </div>
  )
}

export default Card