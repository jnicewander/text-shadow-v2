import React from 'react'
import Direction from './direction'
import ControlList from './control-list'

const ControlPanel = ({ direction, controls, handleControlInputs, addControl }) => {
  return (
    <div>
      <Direction
        direction={direction} 
        handleControlInputs={handleControlInputs}
      />
      <ControlList
        controls={controls}
        handleControlInputs={handleControlInputs}
      />
      <button
          type='button'
          onClick={addControl}
        >
          Add Control
        </button>   
    </div>
  )
}

export default ControlPanel
