import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import './ColorPicker.css'

const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState({ hex: "#fff" })

  const handleChange = (colorString) => {
    setColor({hex: colorString})
  }
  
  return (
    <div
      className={`ColorPicker_Container`}
    >
    <button
      className={`ColorPicker_Button`}
      onClick={() => setIsOpen(!isOpen)}
      style={{backgroundColor: color.hex}}
    >
    </button>
    <span>{color.hex}</span>
    {
      isOpen &&
        <div
          className={`ColorPicker_Modal`}
        >
          <ChromePicker
            color={color}
            onChange={updatedColor => handleChange(updatedColor.hex)}
          />
        </div>
    }
    </div>
  )
}

export default ColorPicker
