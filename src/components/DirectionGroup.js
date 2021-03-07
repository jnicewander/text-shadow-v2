import React from 'react'

const Direction = ({ direction, handleControlInputs }) => {
  return (
    <div aria-label="Shadow Direction">
      <label>
        A
        <input
          aria-label="Bottom Right" 
          type="radio" 
          name="direction" 
          value="bottomRight"
          checked={direction === "bottomRight"}
          onChange={(e) => handleControlInputs(e)}
        />
      </label>
      <label>
        A
        <input
          aria-label="Bottom Left" 
          type="radio" 
          name="direction" 
          value="bottomLeft"
          checked={direction === "bottomLeft"}
          onChange={(e) => handleControlInputs(e)}
        />
      </label>
      <label>
        A
        <input
          aria-label="Top Left" 
          type="radio" 
          name="direction" 
          value="topLeft"
          checked={direction === "topLeft"}
          onChange={(e) => handleControlInputs(e)}
        />
      </label>
      <label>
        A
        <input
          aria-label="Top Right" 
          type="radio" 
          name="direction" 
          value="topRight"
          checked={direction === "topRight"}
          onChange={(e) => handleControlInputs(e)}
        />                  
      </label>
    </div>
  )
}

export default Direction
