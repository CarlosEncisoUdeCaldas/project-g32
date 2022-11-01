import React from 'react'

const Button = ( { title, handleFunction }) => {
  return (
    <button type="button" name="reset" onClick = { handleFunction }>{ title }</button>
  )
}

export default Button