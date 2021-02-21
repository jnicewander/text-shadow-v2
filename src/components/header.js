import React from 'react'
import './header.css'

const Header = ({ handleClick }) => {

  return (
    <header>
      <h1>text-shadow generator</h1>
      <nav>
        <ul>
          <li>
            <a href='/' onClick={(e) => handleClick(e)}>
              About
            </a>
          </li>
          <li>
            <a href='https://github.com/jnicewander'>
              J. Nicewander
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
