import React from 'react'
import DirectionButton from './DirectionButton'
import './DirectionGroup.css'

const DirectionGroup = ({ direction, setDirection }) => {
  const handleChange = (e) => {
    setDirection(e.target.value)
  }

  return (
    <div className='DirectionGroup' aria-label='Shadow Direction'>
      <h2>Direction</h2>
      <div>
        <DirectionButton
          aria-label='Top'
          value='top'
          direction={direction}
          onChange={(e) => handleChange(e)}
        />
        <DirectionButton
          aria-label='Top Right'
          value='topRight'
          direction={direction}
          onChange={(e) => handleChange(e)}
        />
        <DirectionButton
          aria-label='Right'
          value='right'
          direction={direction}
          onChange={(e) => handleChange(e)}
        />
        <DirectionButton
          aria-label='Bottom Right'
          value='bottomRight'
          direction={direction}
          onChange={(e) => handleChange(e)}
        />
        <DirectionButton
          aria-label='Bottom'
          value='bottom'
          direction={direction}
          onChange={(e) => handleChange(e)}
        />
        <DirectionButton
          aria-label='Bottom Left'
          value='bottomLeft'
          direction={direction}
          onChange={(e) => handleChange(e)}
        />
        <DirectionButton
          aria-label='Left'
          value='left'
          direction={direction}
          onChange={(e) => handleChange(e)}
        />
        <DirectionButton
          aria-label='Top Left'
          value='topLeft'
          direction={direction}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  )
}

export default DirectionGroup
