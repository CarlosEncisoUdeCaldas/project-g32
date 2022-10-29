import PropTypes from "prop-types"

const Contador = ( { value } ) => {
    return(
        <>
            <h1>Contador</h1>
            <p> { value } </p>
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