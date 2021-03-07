import React, { useState, useEffect } from 'react'
import Header from './components/header'
import DisplayPanel from './components/display-panel'
import DirectionGroup from './components/DirectionGroup'
import ControlGroup from './components/ControlGroup'
import buildString from './utilities/build-string'
import './App.css';

function App() {
  const [result, setResult] = useState('')
  const shadowStyle = {
    "textShadow": result
  }
  // spreading the control variable into state allows us to clone and not mutate
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
      <>
        <Header />
        <div className='app-main'>
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
          <DisplayPanel 
            shadowStyle={shadowStyle}
          />
        </div>
      </>
    );
}

export default App;
