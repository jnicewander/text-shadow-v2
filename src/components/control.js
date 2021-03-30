import React from 'react'
import DeleteButton from './DeleteButton'
import ColorPicker from './ColorPicker'
import './Control.css'


const Control = ({ values: { size, color }, index, handleControlInputs, controls, setControls }) => {

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
        onChange={(e, index) => handleControlInputs(e, index)}
        autoComplete="off"
      />
      <input 
        className={`Control`}
        aria-label="Color Input"
        type="text" 
        name="color"
        value={color}
        data-index={index}
        onChange={(e, index) => handleControlInputs(e, index)}
        autoComplete="off" 
      />
      <ColorPicker />
      <DeleteButton
        aria-label="Delete Button"
        data-index={index} 
        handleDelete={(e, index) => handleDelete(e, index)}
      />
    </li>
  )
}

export default Control