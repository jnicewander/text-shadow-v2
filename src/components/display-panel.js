import React, { useState } from 'react'
import DisplayText from './display-text'

const DisplayPanel = ({ shadowStyle }) => {
  const [isEditing, setEditing] = useState(false)
  const [sampleText, setSampleText] = useState('3D Text Shadows')

  return (
    <div>
      <DisplayText
        isEditing={isEditing}
        setEditing={setEditing}
        sampleText={sampleText}
        setSampleText={setSampleText}
        shadowStyle={shadowStyle} 
      />
    </div>
  )
}

export default DisplayPanel
