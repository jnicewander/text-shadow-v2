import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import './ColorPicker.css'

const ColorPicker = ({ color, controls, setControls, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleColorInput = (color) => {
    const idx = index
    const updatedControls = [...controls]
    updatedControls[idx].color = color.hex
    setControls(updatedControls)
  }

  return (
    <div
      className={`ColorPicker_Container`}
    >
    <button
      className={`ColorPicker_Button`}
      onClick={() => setIsOpen(!isOpen)}
      style={{backgroundColor: color}}
    >
      <span>{color}</span>
    </button>
    {
      isOpen &&
        <div
          className={`ColorPicker_Modal`}
        >
          <div className={`ColorPicker_Cover`} onClick={() => setIsOpen(false)} />
          <ChromePicker
            name="color"
            color={color}
            onChange={color => handleColorInput(color)}
          />
        </div>
    }
    </div>
  )
}

export default ColorPicker
