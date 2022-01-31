import React from 'react'
import { baseBtn, addBtn, deleteBtn } from './Button.module.css'
import { MdAddCircleOutline } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'

const Button = ({ className, children, handleClick = () => {}, ...props }) => {
  return (
    <button
      className={`${baseBtn} ${className}`}
      onClick={(e) => handleClick(e)}
      {...props}>
      {children}
    </button>
  )
}

export default Button

export const AddButton = (props) => {
  return (
    <Button className={addBtn} aria-label='Add' {...props}>
      <MdAddCircleOutline />
    </Button>
  )
}

export const DeleteButton = ({ disabled = false, ...props }) => {
  return (
    <Button
      aria-label='Delete'
      className={deleteBtn}
      disabled={disabled}
      {...props}>
      <FaTrash />
    </Button>
  )
}
