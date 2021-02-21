import React from 'react'
import Control from './control'

const ControlList = ({ controls, handleControlInputs }) => {
  return (
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
            />
          ))
      }
    </ul>
  )
}

export default ControlList
