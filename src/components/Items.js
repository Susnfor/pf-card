import React from 'react'
import '../styles/Items.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Items = (props) => {
  return (
    <div className="Items">
    <div className="Items-container">
        <div>
          
          <div className="icon"><FontAwesomeIcon icon={props.icons} /></div>
            <header>{props.method}</header>
            <p>{props.detail}</p>
        </div>


    </div>
  </div>
  )
}

export default Items