import React, { useState, useEffect } from 'react'
import Control from './components/control'
import './App.css';

function App() {
const [result, setResult] = useState('')

// spreading the control variable into state allows us to clone and not mutate
const control = { size: '', color: '', direction: '' }
const [controls, setControls] = useState([ { ...control }])

const addControl = (e) => {
  e.preventDefault()
  setControls([ ...controls, { ...control }])
}

// e.target.index returns undefined when passed as index={index} - find method to pass index without data attributes
const handleControlInputs = (e) => {
  const updatedControls = [...controls]
  updatedControls[e.target.dataset.index][e.target.name] = e.target.value
  setControls(updatedControls)
}

useEffect(() => {
  // text-shadow: num, num, color, num, num, color;
  console.log(controls)
}, [controls])

return (
    <div>
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
