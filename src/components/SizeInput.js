import React, { useState } from 'react'
import './SizeInput.css'

const SizeInput = ({ size, controls, setControls, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleChange = (e) => {    
    const updatedControls = [...controls]
    updatedControls[e.target.dataset.index][e.target.name] = e.target.value
    setControls(updatedControls)
  }

  return (
    <div>
      <button
        className={`SizeInput_Button`}
        onClick={() => setIsOpen(!isOpen)}        
      >
        {size}
      </button>
      {
        isOpen &&
        <div
          className={`SizeInput_Modal`}
        >
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
        </div>
      }
    </div>
  )
}

export default SizeInput
