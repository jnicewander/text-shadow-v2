import React, { useState } from 'react'
import './Result.css'

const DisplayText = ({ result }) => {
  const [isEditing, setEditing] = useState(false)
  const [sampleText, setSampleText] = useState('3D Text Shadows')
  const testShadowStyle = {
    "textShadow": result
  }

  return (
    <section className="Result">
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
        >
          <input
            className="SampleText"
            type="text"
            name="sampleText"
            placeholder="Enter Your Text"
            value={sampleText}
            onChange={e => setSampleText(e.target.value)}
            autoFocus
          />
        </div>
      ): (
        <div
          onClick={() => setEditing(true)}
        >
          <span
            className="SampleText" 
            style={testShadowStyle}
          >
            {sampleText || "Edit This"}
          </span>
        </div>
      )}
    </section>
  )
}

export default DisplayText
