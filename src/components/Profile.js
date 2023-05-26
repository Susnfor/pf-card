import React from 'react'
import '../styles/Profile.css'
import Items from './Items'
import { faEnvelope, faPhone, faBlog, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Profile = () => {
  return (
    <div className="Profile">
    <div className="Profile-container">

      <div className="Profile-banner">
        <div className="Profile-PP">
        <img src="./pp.png" alt="Profile Picture" />
        </div>
      </div>
      <div>
        <Items method="Email" detail="hi@hotmail.com" icons={faEnvelope} />
        <Items method="Phone" detail="+44123" icons={faPhone} />
        <Items method="Website" detail="google.com" icons={faBlog} />
        <Items method="LinkedIn" detail="firstname.surname" icons={faLinkedin} />
        <Items method="Github" detail="susnfor" icons={faGithub} />
        <Items method="Location" detail="London" icons={faLocationDot} />
      </div>


    </div>
  </div>
  )
}

export default Profile