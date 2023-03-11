import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        <a href='/'>Text Shadows v2</a>
      </h1>
    </header>
  )
}

export default Header
