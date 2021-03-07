import React from 'react'

const DeleteButton = ({ handleDelete, ...rest }) => {
  return (
    <button
      onClick={handleDelete}
      {...rest}
    >
      X
    </button>
  )
}

export default DeleteButton
