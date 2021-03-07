import React from 'react'
import { MdRemoveCircle } from 'react-icons/md'
import './DeleteButton.css'

const DeleteButton = ({ handleDelete, ...rest }) => {
  return (
    <button
      className="DeleteButton"
      onClick={handleDelete}
      {...rest}
    >
      <MdRemoveCircle />
    </button>
  )
}

export default DeleteButton
