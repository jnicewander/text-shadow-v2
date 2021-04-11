import React from 'react'
import { MdRemoveCircleOutline } from 'react-icons/md'
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
    >
      <MdRemoveCircleOutline />
    </button>
  )
}

export default DeleteButton
