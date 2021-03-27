import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import './DirectionGroup.css'

const DirectionGroup = ({ direction, setDirection }) => {

  const handleClick = (e) => {
    setDirection(e.target.value)
    console.log(e.target.checked)
  }

  return (
    <div
      className="DirectionGroup"
      aria-label="Shadow Direction"
    >
      <h2>Direction</h2>
      <p>Control the shadow direction</p>
      <label
        className="DirectionLabel"
      >        
        <input
          className="DirectionInput"
          aria-label="Bottom Right" 
          type="radio"
          name="direction" 
          value="bottomRight"
          checked={direction === "bottomRight"}
          onChange={handleClick}
        />
        <FaArrowCircleUp />
      </label>
      <label
        className="DirectionLabel"
      >
        <input
          className="DirectionInput"
          aria-label="Bottom Left" 
          type="radio" 
          name="direction" 
          value="bottomLeft"
          checked={direction === "bottomLeft"}
          onChange={handleClick}
        />
        <FaArrowCircleUp />
      </label>
      <label
        className="DirectionLabel"
      >        
        <input
          className="DirectionInput"
          aria-label="Top Left" 
          type="radio" 
          name="direction" 
          value="topLeft"
          checked={direction === "topLeft"}
          onChange={handleClick}
        />
        <FaArrowCircleUp />
      </label>
      <label
        className="DirectionLabel"
      >        
        <input
          className="DirectionInput"
          aria-label="Top Right" 
          type="radio" 
          name="direction" 
          value="topRight"
          checked={direction === "topRight"}
          onChange={handleClick}
        />
        <FaArrowCircleUp />                  
      </label>
    </div>
  )
}

export default DirectionGroup