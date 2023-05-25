import React from 'react'
import '../styles/About.css'
import Links from './Links'

const About = () => {
  return (
    <div className="About">
        <div className="About-container">
            <div className="About-banner">
                <header>About</header>
                <Links />
            </div>
        </div>
    </div>
  )
}

export default About