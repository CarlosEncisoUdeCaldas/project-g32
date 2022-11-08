

const InputRegister = ( props ) => {
    const { title, type, name, value, handle } = props

  return (
    <>
        <div className="mb-3">
            <label htmlFor="" className="form-label">
              { title }
            </label>
            <input
              type={ type }
              className="form-control"
              placeholder= { title }
              name= { name }
              id= { name }
              value={ value }
              onChange={ handle }
            />
          </div>
    </>
  )
}

export default InputRegister