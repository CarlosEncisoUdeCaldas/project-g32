import PropTypes from "prop-types"
import { useState } from "react";


const Contador = ( { value } ) => {
    //definicion del useState count
    const [ count , setCount ] = useState( value ) ;
    
    //funciones tipo handle
    function handleAddClick (e) {
        // console.log ( value ) //incrementado el valor de value en 1
        // // console.log(e.target.type)
        // document.getElementById('demo').innerHTML = value += 1
        // console.log(e);
        setCount( count + 1 )
        console.log( count );
    }

    return(
        <>
            <h1>Contador</h1>
            <p id='demo'> { count }</p>
            <button type="button" name="add" onClick = { handleAddClick }> + 1 </button>
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