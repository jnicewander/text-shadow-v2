import React from 'react'
import Control from './Control'
import './ControlList.css'

const ControlList = ({ controls, setControls }) => {

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
    </section>
  )
}

export default ControlList
