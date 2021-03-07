import React from 'react'
import Control from './Control'
import { randomSize, randomColor } from '../utilities/random-shadow'

const ControlList = ({ direction, initialShadow, controls, handleControlInputs, setControls }) => {

  const addControl = (e) => {
    e.preventDefault()
    initialShadow.size = randomSize()
    initialShadow.color = randomColor()
    setControls([ ...controls, { ...initialShadow }])
  }

  return (
    <section>
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
                controls={controls}
                setControls={setControls}
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
