import React from 'react'
import './SizeInput.css'

const SizeInput = ({ size, controls, setControls, index }) => {
  
  const incrementSize = e => {
    const updatedControls = [...controls]
    updatedControls[e.target.dataset.index].size++
    setControls(updatedControls)
  }

  const decrementSize = e => {
    const updatedControls = [...controls]
    updatedControls[e.target.dataset.index].size--
    setControls(updatedControls)
  }

  const handleChange = e => {    
    const updatedControls = [...controls]
    updatedControls[e.target.dataset.index][e.target.name] = e.target.value
    setControls(updatedControls)
  }

  return (
    <div
      className={`SizeInput_Container`}
    >
      <button
        onClick={e => decrementSize(e)}
        data-index={index}
      >
        &lt;
      </button>
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
      <button
        onClick={e => incrementSize(e)}
        data-index={index}
      >
        &gt;
      </button>
    </div>
  )
}

export default SizeInput
