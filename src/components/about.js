import React from 'react'

const About = ({ handleClick }) => {
  return (
    <div>
      <p>Placeholder content.</p>
      <button
        onClick={(e) => handleClick(e)}
      >
        Close Me
      </button>
    </div>
  )
}

export default About
