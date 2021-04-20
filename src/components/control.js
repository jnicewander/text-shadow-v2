import React from 'react'
import DeleteButton from './DeleteButton'
import AddButton from './AddButton'
import SizeInput from './SizeInput'
import ColorPicker from './ColorPicker'
import './Control.css'


const Control = ({ values: { size, color }, index, controls, setControls }) => {

  return (
    <li
      className={`Control_Container`}
    >
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
      <DeleteButton
        index={index}
        controls={controls}
        setControls={setControls}
      />
      <AddButton
        index={index}
        controls={controls}
        setControls={setControls}
      />
    </li>
  )
}

export default Control