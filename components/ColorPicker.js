import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import styles from './ColorPicker.module.css'

const ColorPicker = ({ id, color, changeColor }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (color) => {
    changeColor(id, color.hex)
  }

  return (
    <div className={styles.ColorPicker_Container}>
      <button
        className={styles.ColorPicker_Button}
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: color }}>
        <span>{color}</span>
      </button>
      {isOpen && (
        <div className={styles.ColorPicker_Modal}>
          <div
            className={styles.ColorPicker_Cover}
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
