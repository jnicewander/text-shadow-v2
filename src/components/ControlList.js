import React from 'react'
import Control from './Control'
import { randomSize, randomColor } from '../utilities/random-shadow'
import './ControlList.css'

const ControlList = ({ initialShadow, controls, setControls }) => {

  const addControl = (e) => {
    e.preventDefault()
    initialShadow.size = randomSize(5, 10)
    initialShadow.color = randomColor()
    setControls([ ...controls, { ...initialShadow }])
  }

  const handleControlInputs = (e) => {
    const updatedControls = [...controls]
    updatedControls[e.target.dataset.index][e.target.name] = e.target.value
    setControls(updatedControls)
  }

  return (
    <section className="ControlGroup">
      <header>
        <h2>Controls</h2>
        <span>Size</span>
        <span>Color</span>
        <span>Delete</span>
      </header>
      <ul>
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
