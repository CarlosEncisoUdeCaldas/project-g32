import PropTypes from "prop-types"

const Contador = ( { value } ) => {
    //funciones tipo handle
    function handleAddClick (e) {
        console.log ( value ) //incrementado el valor de value en 1
        // console.log(e.target.type)
        
        document.getElementById('demo').innerHTML = value += 1
    }

    return(
        <>
            <h1>Contador</h1>
            <p id='demo'> { value } </p>
            <button type="button" name="add" onClick = { handleAddClick }> + 1 </button>
            <p > { value } </p>
        </>
    )
}

export default Contador;

//valido la props value que sea de tipo numerico
Contador.propTypes = {
    value: PropTypes.number
}

//default props de value
Contador.defaultProps = {
    value: 32
}