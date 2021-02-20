import React from 'react'

const Direction = ({ handleControlInputs }) => {
  return (
    <div aria-label="Shadow Direction">
      <input
        aria-label="Bottom Right" 
        type="radio" 
        name="direction" 
        value="bottomRight"
        onChange={(e) => handleControlInputs(e)}
      />
      <input
        aria-label="Bottom Left" 
        type="radio" 
        name="direction" 
        value="bottomLeft"
        onChange={(e) => handleControlInputs(e)}
      />
      <input
        aria-label="Top Left" 
        type="radio" 
        name="direction" 
        value="topLeft"
        onChange={(e) => handleControlInputs(e)}
      />
      <input
        aria-label="Top Right" 
        type="radio" 
        name="direction" 
        value="topRight"
        onChange={(e) => handleControlInputs(e)}
      />                  
    </div>
  )
}

export default Direction
