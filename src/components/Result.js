import React, { useState } from 'react'

const DisplayText = ({ result }) => {
  const [isEditing, setEditing] = useState(false)
  const [sampleText, setSampleText] = useState('3D Text Shadows')
  const testShadowStyle = {
    "textShadow": result
  }

  return (
    <section>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
        >
          <input
            type="text"
            name="sampleText"
            placeholder="Enter Your Text"
            value={sampleText}
            onChange={e => setSampleText(e.target.value)}
          />
        </div>
      ): (
        <div
          onClick={() => setEditing(true)}
        >
          <span style={testShadowStyle}>
            {sampleText || "Edit This"}
          </span>
        </div>
      )}
    </section>
  )
}

export default DisplayText
