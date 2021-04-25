import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Result from './components/Result'
import DirectionGroup from './components/DirectionGroup'
import ControlList from './components/ControlList'
import Code from './components/Code'
import Footer from './components/Footer'
import { randomSize, randomColor } from './utilities/random-shadow'
import buildString from './utilities/build-string'
import './App.css';

function App() {
  const [result, setResult] = useState('')
  /* 
    spreading the initialShadow into initial state allows us to clone and not mutate
    id temporary and not guaranteed to generate a unique id
    required for unchanging key in mapped controls
  */
  const initialShadow = [
    {
      id: Math.floor(Math.random() * Date.now()),
      size: randomSize(5, 25),
      color: '#3f3f3f'
    },
    {
      id: Math.floor(Math.random() * Date.now()),
      size: randomSize(10, 25),
      color: '#707070'
    },
  ]

  const [controls, setControls] = useState([ ...initialShadow ])
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
          <div
            className="VerticalContainer"
          >
            <Result 
              result={result}
            />
            <Code 
              result={result}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default App;
