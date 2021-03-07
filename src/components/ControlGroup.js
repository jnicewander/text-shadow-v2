import React from 'react'
import DirectionGroup from './DirectionGroup'
import Control from './Control'

const ControlList = ({ direction, controls, handleControlInputs, handleDelete, addControl }) => {
  return (
    <section>
      <DirectionGroup 
        direction={direction} 
        handleControlInputs={handleControlInputs}
      />
      <ul>
        <li>Size</li>
        <li>Color</li>
        {
          controls.length &&
            controls.map((values, index) => (
              <Control
                key={index}
                values={values}
                index={index}
                handleControlInputs={handleControlInputs}
                handleDelete={handleDelete}
              />
            ))
        }
      </ul>
      <button
        onClick={addControl}
      >
        Add Control
      </button> 
    </section>
  )
}

export default ControlList
