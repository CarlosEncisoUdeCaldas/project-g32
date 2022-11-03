import PropTypes from "prop-types"
import { useState } from "react";
import Button from "./Button";


const Contador = ( { value } ) => {
    //definicion del useState count
    const [ count , setCount ] = useState( value ) ;
    
    //funciones tipo handle de contador
    function handleAddClick (e) {
        // console.log ( value ) //incrementado el valor de value en 1
        // // console.log(e.target.type)
        // document.getElementById('demo').innerHTML = value += 1
        // console.log(e);
        setCount( count + 1 )
        console.log( count );
    }

    //funcion para restar
    const handleResta = () => {
        setCount( count - 1 )
    }

    //funcion reset
    const handleReset = () => {
        setCount( value ) ;
    }

    return(
        <>
            <h1>Contador</h1>
            <p> { count } </p>

            {/* extraccion de un elemento button a un componente */}
            <Button title="+ 1" handleFunction= { handleAddClick } />
            <Button title="- 1" handleFunction= { handleResta } />
            <Button title="Reset" handleFunction = { handleReset } />
            <br />
            

            {/* declaracion de los elementos button en jsx */}
            {/* <button type="button" name="add" onClick = { handleAddClick }>+ 1</button> */}
            {/* <button type="button" name="resta" onClick = { handleResta }>- 1</button> */}
            {/* <button type="button" name="reset" onClick = { handleReset }>Reset</button> */}
            {/* { count !== 0 && <Button count={count} handleReset = { handleReset } /> } */}
            
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