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
        <span>text-shadows:</span> {result};
      </code>
    </div>
  )
}

export default Code
