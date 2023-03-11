import React from 'react'
import styles from './DirectionButton.module.css'

const DirectionButton = ({ value, onChange, direction, ...rest }) => (
  <label
    className={`${styles.DirectionButton_Label} ${
      direction === value ? styles.DirectionButton_Checked : ''
    }`}>
    <input
      className={styles.DirectionButton_Input}
      type='radio'
      name='direction'
      value={value}
      onChange={onChange}
      {...rest}
    />

    <span className={`${styles.DirectionButton_PseudoLabel} ${styles[value]}`}>
      TS
    </span>
  </label>
)

export default DirectionButton
