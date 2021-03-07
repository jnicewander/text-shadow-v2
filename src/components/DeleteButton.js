import React from 'react'
import { MdRemoveCircleOutline } from 'react-icons/md'
import './DeleteButton.css'

const DeleteButton = ({ handleDelete, ...rest }) => {
  return (
    <button
      className="DeleteButton"
      onClick={handleDelete}
      {...rest}
    >
      <MdRemoveCircleOutline />
    </button>
  )
}

export default DeleteButton
