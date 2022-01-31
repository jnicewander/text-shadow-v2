import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Header from './components/Header'
import Result from './components/Result'
import Footer from './components/Footer'
import { randomSize } from './utilities/random-shadow'
import buildString from './utilities/build-string'
import Control from './components/Control'
import DirectionButton from './components/DirectionButton'
import './App.css'

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
      color: '#6C92FF',
    },
    {
      id: Math.floor(Math.random() * Date.now()),
      size: randomSize(10, 25),
      color: '#5b4cbc',
    },
  ]

  const [controls, setControls] = useState([...initialShadow])
  const [direction, setDirection] = useState('bottomRight')

  useEffect(() => {
    const result = buildString(controls, direction)
    setResult(result)
  }, [controls, direction])

  const directions = [
    { ariaLabel: 'Top Left', value: 'topLeft' },
    { ariaLabel: 'Top', value: 'top' },
    { ariaLabel: 'Top Right', value: 'topRight' },
    { ariaLabel: 'Left', value: 'left' },
    { ariaLabel: 'Right', value: 'right' },
    { ariaLabel: 'Bottom Left', value: 'bottomLeft' },
    { ariaLabel: 'Bottom', value: 'bottom' },
    { ariaLabel: 'Bottom Right', value: 'bottomRight' },
  ]

  return (
    <div className='App'>
      <Header />
      <main>
        <Result result={result} />
        <section className='controlPanel'>
          <div className='directionGroup' aria-label='Shadow Direction'>
            <h2>Direction</h2>
            <div>
              {directions.map(({ ariaLabel, value }) => (
                <DirectionButton
                  key={value}
                  aria-label={ariaLabel}
                  value={value}
                  direction={direction}
                  onChange={(e) => setDirection(e.target.value)}
                />
              ))}
            </div>
          </div>
          <header>
            <h2>Controls</h2>
          </header>
          <TransitionGroup component='ul'>
            {controls.map((values, index) => (
              <CSSTransition
                key={values.id}
                timeout={{
                  enter: 500,
                  exit: 300,
                }}
                classNames='cg'>
                <Control
                  values={values}
                  index={index}
                  controls={controls}
                  setControls={setControls}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
