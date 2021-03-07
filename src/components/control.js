import React from 'react'
import DeleteButton from './DeleteButton'

const Control = ({ values: { size, color }, index, handleControlInputs, handleDelete }) => {

  return (
    <li>
      <input
        aria-label="Size Input"
        type="number" 
        name="size"
        value={size} 
        min="1"
        data-index={index}
        onChange={(e, index) => handleControlInputs(e, index)}
      />
      <input 
        aria-label="Color Input"
        type="text" 
        name="color"
        value={color}
        data-index={index}
        onChange={(e, index) => handleControlInputs(e, index)} 
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