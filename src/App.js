import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Result from './components/Result'
import DirectionGroup from './components/DirectionGroup'
import ControlList from './components/ControlList'
import Code from './components/Code'
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
            <ControlList
              initialShadow={initialShadow} 
              controls={controls}
              setControls={setControls}
            />
          </div>
          <Result 
            result={result}
          />
        </div>
          <Code 
            result={result}
          />
      </div>
    );
}

export default App;
