import React, { useState, useEffect } from 'react'
import Header from './components/header'
import ControlList from './components/control-list'
import Direction from './components/direction'
import buildString from './utilities/build-string'
import { randomSize, randomColor } from './utilities/random-shadow'
import './App.css';

function App() {
const [result, setResult] = useState('')
const shadowStyle = {
  "textShadow": result
}

// spreading the control variable into state allows us to clone and not mutate
const control = { size: '3', color: '#202020' }
const [controls, setControls] = useState([ { ...control }])
const [direction, setDirection] = useState('bottomRight')
console.log('Direct: ', direction)

const addControl = (e) => {
  e.preventDefault()
  control.size = randomSize()
  control.color = randomColor()
  setControls([ ...controls, { ...control }])
}

// e.target.index returns undefined when passed as index={index} - find method to pass index without data attributes
const handleControlInputs = (e) => {
  if(e.target.name === 'direction') {
    setDirection(e.target.value)
    return 
  }
  const updatedControls = [...controls]
  updatedControls[e.target.dataset.index][e.target.name] = e.target.value
  setControls(updatedControls)
}

useEffect(() => {
  const result = buildString(controls, direction)
  setResult(result)
}, [controls, direction])

return (
    <div>
      <Header />
      <h1 style={shadowStyle}>Text Shadows VII</h1>
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
  );
}

export default App;
