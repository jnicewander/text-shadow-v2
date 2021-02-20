import React from 'react'

const DisplayText = ({ isEditing, setEditing, sampleText, setSampleText, shadowStyle }) => {

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
          <span style={shadowStyle}>
            {sampleText || "Edit This"}
          </span>
        </div>
      )}
    </section>
  )
}

export default DisplayText
