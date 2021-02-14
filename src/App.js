import React, { useState, useEffect } from 'react'
import ControlList from './components/control-list'
import buildString from './utilities/build-string'
import { randomSize, randomColor } from './utilities/random-shadow'
import './App.css';

function App() {
const [result, setResult] = useState('')
const shadowStyle = {
  "text-shadow": result
}

// spreading the control variable into state allows us to clone and not mutate
const control = { size: '3', color: '#202020', direction: '' }
const [controls, setControls] = useState([ { ...control }])

const addControl = (e) => {
  e.preventDefault()
  control.size = randomSize()
  control.color = randomColor()
  setControls([ ...controls, { ...control }])
}

// e.target.index returns undefined when passed as index={index} - find method to pass index without data attributes
const handleControlInputs = (e) => {
  const updatedControls = [...controls]
  updatedControls[e.target.dataset.index][e.target.name] = e.target.value
  setControls(updatedControls)
}

useEffect(() => {
  const result = buildString(controls)
  setResult(result)
}, [controls])

return (
    <div>
      <h1 style={shadowStyle}>Text Shadows VII</h1>
      <p>Result is: {result};</p>
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
  );
}

export default App;
