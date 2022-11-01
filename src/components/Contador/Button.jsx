import React from 'react'

const Button = ( { title, handleFunction }) => {
  return (
    <button className='btn btn-secondary' type="button" name="reset" onClick = { handleFunction }>{ title }</button>
  )
}

export default Button