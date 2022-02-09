import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import './ColorPicker.css'

const ColorPicker = ({ id, color, changeColor }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (color) => {
    changeColor(id, color.hex)
  }

  return (
    <div className={`ColorPicker_Container`}>
      <button
        className={`ColorPicker_Button`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: color }}>
        <span>{color}</span>
      </button>
      {isOpen && (
        <div className={`ColorPicker_Modal`}>
          <div
            className={`ColorPicker_Cover`}
            onClick={() => setIsOpen(false)}
          />
          <ChromePicker
            name='color'
            color={color}
            onChange={(color) => handleChange(color)}
          />
        </div>
      )}
    </div>
  )
}

export default ColorPicker
