import React from 'react'
import Control from './Control'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ControlList.css'

const ControlList = ({ controls, setControls }) => {

  return (
    <section className="ControlGroup">
      <header>
        <h2>Controls</h2>
        <span>Size</span>
        <span>Color</span>
        <span>Delete</span>
      </header>
      <TransitionGroup component='ul'>
        {controls.map((values, index) => (
          <CSSTransition
            key={values.id}
            timeout={{
              enter: 500,
              exit: 300,
            }}
            classNames="cg"
          >
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
  )
}

export default ControlList
