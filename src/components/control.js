import React from 'react'

const Control = ({ values: { size, color, direction }, index, handleControlInputs }) => {

  return (
    <div>
      {/* replace with labels */}
      <span>Shadow {index}</span>      
      <label>
      Size
      <input
        type="number" 
        name="size"
        value={size} 
        min="1"
        data-index={index}
        onChange={(e, index) => handleControlInputs(e, index)}
      />
      </label>
      <label>
      Color
      <input 
        type="text" 
        name="color"
        value={color}
        data-index={index}
        onChange={(e, index) => handleControlInputs(e, index)} 
      />
      </label>
      <label>
      Direction
      <input 
        type="text" 
        name="direction" 
        value={direction}
        data-index={index}
        onChange={(e) => handleControlInputs(e)}
      />
      </label>

    </div>
  )
}

export default Control