import React from 'react'

const Control = ({ values: { size, color, direction }, index, handleControlInputs }) => {

  return (
    <div>
      {/* replace with labels */}
      <span>Shadow {index}</span>      
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
      <input
        aria-label="direction" 
        type="text" 
        name="direction" 
        value={direction}
        data-index={index}
        onChange={(e) => handleControlInputs(e)}
      />
    </div>
  )
}

export default Control