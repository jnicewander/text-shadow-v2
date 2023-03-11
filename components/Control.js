import React from 'react'
import styles from './Control.module.css'

const Control = ({ children }) => {
  return <li className={styles.Control_Container}>{children}</li>
}

export default Control
