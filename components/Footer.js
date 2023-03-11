import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.Footer_Container}>
      <p>
        &copy; 2021{' '}
        <a href='https://github.com/jnicewander'>Justin Nicewander</a>, All
        Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
