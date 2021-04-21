import React from 'react'
import Control from './Control'
import './ControlList.css'

const ControlList = ({ controls, setControls }) => {

  return (
    <section className="ControlGroup">
      <header>
        <h2>Controls</h2>
        <span>Size</span>
        <span>Color</span>
        <span>Delete</span>
        <span>Add</span>
      </header>
      <ul>
        {
          controls.length &&
            controls.map((values, index) => (
              <Control
                key={index}
                values={values}
                index={index}
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
