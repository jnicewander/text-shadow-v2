import React from 'react'
import Control from './Control'
import { randomSize, randomColor } from '../utilities/random-shadow'
import './ControlList.css'

const ControlList = ({ initialShadow, controls, setControls }) => {

  const addControl = (e) => {
    e.preventDefault()
    initialShadow.size = randomSize()
    initialShadow.color = randomColor()
    setControls([ ...controls, { ...initialShadow }])
  }

  const handleControlInputs = (e) => {
    const updatedControls = [...controls]
    updatedControls[e.target.dataset.index][e.target.name] = e.target.value
    setControls(updatedControls)
  }

  const handleColorInput = (hexValue, index) => {
    const updatedControls = [...controls]
    updatedControls[index].color = hexValue
    setControls(updatedControls)
  }

  return (
    <section className="ControlGroup">
      <header>
        <h2>Controls</h2>
        <h3>Size</h3>
        <h3>Color</h3>
        <h3>Delete</h3>
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
                handleColorInput={handleColorInput}
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
