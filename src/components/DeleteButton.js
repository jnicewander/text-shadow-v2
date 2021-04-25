import React from 'react'
import { FaTrash } from 'react-icons/fa'
import './DeleteButton.css'

const DeleteButton = ({ controls, setControls, index}) => {

  const handleClick = e => {
    e.preventDefault()
    const updatedControls = [...controls]
    updatedControls.splice(index, 1)
    setControls(updatedControls)
  }

  return (
    <button
      aria-label="Delete Button"
      className="DeleteButton"
      onClick={e => handleClick(e)}
      disabled={controls.length <= 1}
    >
      <FaTrash />      
    </button>
  )
}

export default DeleteButton
