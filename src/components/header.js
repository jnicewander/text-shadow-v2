import React from 'react'
import styles from  './header.module.css'

const Header = () => {

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        <a 
          href='/'
          className={styles.link}
        >
            3D Text Shadow Builder
        </a>
      </h1>
    </header>
  )
}

export default Header
