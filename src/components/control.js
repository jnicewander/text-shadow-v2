import React from 'react'
import DeleteButton from './DeleteButton'
import SizeInput from './SizeInput'
import ColorPicker from './ColorPicker'
import './Control.css'


const Control = ({ values: { size, color }, index, controls, setControls }) => {

  const handleDelete = (e) => {
    e.preventDefault()
    const updatedControls = [...controls]
    updatedControls.splice(e.target.dataset.index, 1)
    setControls(updatedControls)
  }

  return (
    <li>
      <SizeInput 
        size={size}
        controls={controls}
        setControls={setControls}
        index={index}
      />    
      {/* TODO aria-label for color picker? */}
      <ColorPicker
        index={index}
        color={color}
        controls={controls}
        setControls={setControls}
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