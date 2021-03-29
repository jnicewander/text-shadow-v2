import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

const ColorPicker = () => {
  const [color, setColor] = useState({ hex: "#fff" })

  const handleChange = (colorString) => {
    setColor({hex: colorString})
  }
  console.log("Color: ", color)
  return (
    <div>
      <ChromePicker
        color={color}
        onChange={updatedColor => handleChange(updatedColor.hex)}
      />
    </div>
  )
}

export default ColorPicker
