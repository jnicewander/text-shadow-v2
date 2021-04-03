import React from 'react'
import DeleteButton from './DeleteButton'
import ColorPicker from './ColorPicker'
import './Control.css'


const Control = ({ values: { size, color }, index, handleControlInputs, handleColorInput, controls, setControls }) => {

  const handleDelete = (e) => {
    e.preventDefault()
    const updatedControls = [...controls]
    updatedControls.splice(e.target.dataset.index, 1)
    setControls(updatedControls)
  }

  return (
    <li>
      <input
        className={`Control`}
        aria-label="Size Input"
        type="number" 
        name="size"
        value={size} 
        min="1"
        data-index={index}
        onChange={e => handleControlInputs(e)}
        autoComplete="off"
      />
      {/* TODO aria-label for color picker? */}
      <ColorPicker
        index={index}
        color={color}
        handleColorInput={handleColorInput}
      />
      <DeleteButton
        aria-label="Delete Button"
        data-index={index} 
        handleDelete={(e, index) => handleDelete(e, index)}
      />
    </li>
  )
}

export default Control