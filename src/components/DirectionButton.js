import React from 'react'
import './DirectionButton.css'

const DirectionButton = ({ value, onChange, direction, ...rest }) => (
  <label
    className={`DirectionButton_Label ${direction === value ? 'DirectionButton_Checked': ''}`}
  >
    <input        
        className="DirectionButton_Input"           
        type="radio" 
        name="direction"
        value={value}
        onChange={onChange}
        {...rest}
      />
      <span className={`DirectionButton_PseudoLabel ${value}`}>TS</span>
  </label>
)

export default DirectionButton