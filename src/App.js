import React, { useState, useEffect } from 'react'
import Header from './components/header'
import DisplayPanel from './components/display-panel'
import ControlGroup from './components/ControlGroup'
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
  const [controls, setControls] = useState([{ ...control }])
  const [direction, setDirection] = useState('bottomRight')

  const addControl = (e) => {
    e.preventDefault()
    control.size = randomSize()
    control.color = randomColor()
    setControls([ ...controls, { ...control }])
  }
  
  const handleDelete = (e) => {
    e.preventDefault()
    const updatedControls = [...controls]
    console.log('This is updatedControls: ', updatedControls)
    console.log('You clicked: ', e.target.dataset)
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
      <>
        <Header />
        <div className='app-main'>          
          <ControlGroup
            direction={direction} 
            controls={controls}
            handleControlInputs={handleControlInputs}
            addControl={addControl}
            handleDelete={handleDelete}
          />
          <DisplayPanel 
            shadowStyle={shadowStyle}
          />
        </div>
      </>
    );
}

export default App;
