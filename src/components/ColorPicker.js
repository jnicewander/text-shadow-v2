import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import './ColorPicker.css'

const ColorPicker = ({ handleColorInput, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hexColor, setHexColor] = useState("#fff")
  
  // could not find a way to pass the index to the ChromePicker to pass back out
  const handleChange = (color) => {
    const idx = index
    setHexColor(color.hex)
    handleColorInput(color.hex, idx)
  }

  return (
    <div
      className={`ColorPicker_Container`}
    >
    <button
      className={`ColorPicker_Button`}
      onClick={() => setIsOpen(!isOpen)}
      style={{backgroundColor: hexColor}}
    >
    </button>
    <span>{hexColor}</span>
    {
      isOpen &&
        <div
          className={`ColorPicker_Modal`}
        >        
          <ChromePicker
            name="color"            
            color={hexColor}
            onChange={(color, e) => handleChange(color, e)}
          />
        </div>
    }
    </div>
  )
}

export default ColorPicker
