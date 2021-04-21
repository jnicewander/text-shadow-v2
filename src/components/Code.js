import React from 'react'
import './Code.css'

const Code = ({ result }) => {
  return (
    <div
      className="Code_Container"
    >
      <code
        className="Code"
      >
        <span>text-shadow:</span> {result};
      </code>
    </div>
  )
}

export default Code
