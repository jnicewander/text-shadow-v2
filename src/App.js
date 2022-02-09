import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Header from './components/Header'
import Result from './components/Result'
import Footer from './components/Footer'
import { randomSize, randomColor } from './utilities/random-shadow'
import buildString from './utilities/build-string'
import Control from './components/Control'
import DirectionButton from './components/DirectionButton'
import './App.css'
import useShadows from 'hooks/useShadows'
import { AddButton } from 'components/Button'
import { DeleteButton } from 'components/Button'
import ColorPicker from 'components/ColorPicker'
import SizeInput from 'components/SizeInput'

function App() {
  const initialState = {
    shadows: [
      { id: 1, size: 6, color: '#6C92FF' },
      { id: 2, size: 10, color: '#5b4cbc' },
    ],
  }
  const [
    state,
    {
      addShadow,
      updateShadow,
      deleteShadow,
      increaseSize,
      decreaseSize,
      changeColor,
    },
  ] = useShadows(initialState)
  const [result, setResult] = useState('')
  const [direction, setDirection] = useState('bottomRight')

  useEffect(() => {
    const result = buildString(state.shadows, direction)
    setResult(result)
  }, [state.shadows, direction])

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
            {state.shadows.map(({ id, size, color }) => (
              <CSSTransition
                key={id}
                timeout={{
                  enter: 500,
                  exit: 300,
                }}
                classNames='cg'>
                <Control id={id} size={size} color={color}>
                  <SizeInput
                    id={id}
                    size={size}
                    decrement={decreaseSize}
                    increment={increaseSize}
                    update={updateShadow}
                  />
                  <ColorPicker
                    id={id}
                    color={color}
                    changeColor={changeColor}
                  />
                  <DeleteButton handleClick={() => deleteShadow(id)} />
                  <AddButton
                    handleClick={() =>
                      addShadow(id, {
                        size: randomSize(),
                        color: randomColor(),
                      })
                    }
                  />
                </Control>
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
