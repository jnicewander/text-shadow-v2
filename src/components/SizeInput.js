import React from 'react'
import './SizeInput.css'

const SizeInput = ({ size, controls, setControls, index }) => {

  const handleChange = (e) => {    
    const updatedControls = [...controls]
    updatedControls[e.target.dataset.index][e.target.name] = e.target.value
    setControls(updatedControls)
  }

  return (
    <input 
      className={`SizeInput`}
      aria-label="Size Input"
      type="number"
      name="size"
      value={size}
      min="1"
      data-index={index}
      onChange={e => handleChange(e)}
      autoComplete="off"
    />
  )
}

export default SizeInput
