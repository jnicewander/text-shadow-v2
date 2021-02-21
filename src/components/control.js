import React from 'react'

const Control = ({ values: { size, color }, index, handleControlInputs }) => {

  return (
    <li>
      <input
        aria-label="size"
        type="number" 
        name="size"
        value={size} 
        min="1"
        data-index={index}
        onChange={(e, index) => handleControlInputs(e, index)}
      />
      <input 
        aria-label="color"
        type="text" 
        name="color"
        value={color}
        data-index={index}
        onChange={(e, index) => handleControlInputs(e, index)} 
      />
    </li>
  )
}

export default Control