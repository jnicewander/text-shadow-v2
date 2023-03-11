import React from 'react'
import styles from './Button.module.css'
import { MdAddCircleOutline } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'

const Button = ({
  className,
  children,
  type = 'button',
  handleClick = () => {},
  ...props
}) => {
  return (
    <button
      className={`${styles.base} ${className}`}
      type={type}
      onClick={(e) => handleClick(e)}
      {...props}>
      {children}
    </button>
  )
}

export default Button

export const AddButton = (props) => {
  return (
    <Button className={styles.add} aria-label='Add' {...props}>
      <MdAddCircleOutline />
    </Button>
  )
}

export const DeleteButton = ({ disabled = false, ...props }) => {
  return (
    <Button
      aria-label='Delete'
      className={styles.delete}
      disabled={disabled}
      {...props}>
      <FaTrash />
    </Button>
  )
}

export const DirectionButton = ({ value, ...props }) => {
  return (
    <Button className={styles.direction} value={value} {...props}>
      <span className={styles[value]}>TS</span>
    </Button>
  )
}
