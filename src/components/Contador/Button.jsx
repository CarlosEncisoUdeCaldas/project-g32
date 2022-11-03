import React from 'react'

const Button = ( { title, handleFunction }) => {
  return (
    <button className='btn btn-outline-primary' type="button" name="reset" onClick = { handleFunction }>{ title }</button>
  )
}

export default Button