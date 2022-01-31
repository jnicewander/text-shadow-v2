import React from 'react'
import './Control.css'
import SizeInput from './SizeInput'
import ColorPicker from './ColorPicker'
import { AddButton, DeleteButton } from './Button'
import { randomSize, randomColor } from '../utilities/random-shadow'

const Control = ({ values: { size, color }, index, controls, setControls }) => {
  const newShadow = {
    id: Math.floor(Math.random() * Date.now()),
    size: randomSize(5, 10),
    color: randomColor(),
  }

  const addShadow = (e) => {
    e.preventDefault()
    const updatedControls = [...controls]
    updatedControls.splice(index + 1, 0, newShadow)
    setControls(updatedControls)
  }

  const deleteShadow = (e) => {
    e.preventDefault()
    const updatedControls = [...controls]
    updatedControls.splice(index, 1)
    setControls(updatedControls)
  }

  return (
    <li className={`Control_Container`}>
      <SizeInput
        size={size}
        controls={controls}
        setControls={setControls}
        index={index}
      />
      <ColorPicker
        index={index}
        color={color}
        controls={controls}
        setControls={setControls}
      />
      <DeleteButton index={index} handleClick={deleteShadow} />
      <AddButton index={index} handleClick={addShadow} />
    </li>
  )
}

export default Control
