import React from 'react'

import Link from 'components/link'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        <Link to='/'>Text Shadows v2</Link>
      </h1>
    </header>
  )
}

export default Header
