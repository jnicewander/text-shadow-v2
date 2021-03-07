import React from 'react'

const DirectionGroup = ({ direction, setDirection }) => {

  const handleClick = (e) => {
    setDirection(e.target.value)
  }

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
          onChange={handleClick}
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
          onChange={handleClick}
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
          onChange={handleClick}
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
          onChange={handleClick}
        />                  
      </label>
    </div>
  )
}

export default DirectionGroup