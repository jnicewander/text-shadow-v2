import React from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { randomSize, randomColor } from '../utilities/random-shadow'
import './AddButton.css'

const AddButton = ({ controls, setControls, index }) => {
  
  const newShadow = {
    id: Math.floor(Math.random() * Date.now()),
    size: randomSize(5, 10),
    color: randomColor()
  }

  const handleClick = e => {
    e.preventDefault()
    const updatedControls = [...controls]
    updatedControls.splice(index + 1, 0, newShadow)
    setControls(updatedControls)
  }

  return (
    <button
      aria-label="Add Button"
      className="AddButton"
      onClick={e => handleClick(e)}
    >
      <MdAddCircleOutline />
    </button>
  )
}

export default AddButton
