import React, { useState, useEffect } from 'react'
import Header from './components/header'
import Result from './components/Result'
import DirectionGroup from './components/DirectionGroup'
import ControlGroup from './components/ControlGroup'
import buildString from './utilities/build-string'
import './App.css';

function App() {
  const [result, setResult] = useState('')
  
  // spreading the initialShadow into initial state allows us to clone and not mutate
  const initialShadow = { 
    size: '3', 
    color: '#202020' 
  }
  const [controls, setControls] = useState([{ ...initialShadow }])
  const [direction, setDirection] = useState('bottomRight')

  useEffect(() => {
    const result = buildString(controls, direction)
    setResult(result)
  }, [controls, direction])

  return (
      <div className='App'>
        <Header />
        <div className='AppMain'>
          <div>
            <DirectionGroup
              direction={direction}
              setDirection={setDirection}
            />
            <ControlGroup
              initialShadow={initialShadow} 
              controls={controls}
              setControls={setControls}
            />
          </div>
          <Result 
            result={result}
          />
        </div>
      </div>
    );
}

export default App;
