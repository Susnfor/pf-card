import React from 'react'
import '../styles/Profile.css'
import Items from './Items'

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
        <Items />
        <Items />
      </div>


    </div>
  </div>
  )
}

export default Profile