import React from 'react'
import styles from './SizeInput.module.css'

const SizeInput = ({ id, increment, decrement, update, size }) => {
  const handleChange = (event) => {
    update({ id, size: event.target.value })
  }

  return (
    <div className={styles.SizeInput_Container}>
      <button onClick={() => decrement(id)}>&lt;</button>
      <input
        className={styles.SizeInput}
        aria-label='Size Input'
        type='number'
        name='size'
        value={size}
        min='1'
        onChange={(e) => handleChange(e)}
        autoComplete='off'
      />
      <button onClick={() => increment(id)}>&gt;</button>
    </div>
  )
}

export default SizeInput
