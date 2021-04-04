import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import './ColorPicker.css'

const ColorPicker = ({ color, controls, setControls, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleColorInput = (colorObject) => {
    const idx = index    
    const updatedControls = [...controls]
    updatedControls[idx].color = colorObject.hex
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
    </button>
    <span>{color}</span>
    {
      isOpen &&
        <div
          className={`ColorPicker_Modal`}
        >        
          <ChromePicker
            name="color"            
            color={color}
            onChange={(color, e) => handleColorInput(color, e)}
          />
        </div>
    }
    </div>
  )
}

export default ColorPicker
