import React from "react";
import { useState } from "react";

const RegisterForm = () => {

  //necesitamos un useState tipo objeto que tenga las mismas propiedades que los name de los inputs
  const [ inputs, setInputs ] = useState( {
    firstname:'',
    lastname:'',
    email:''
  } );

  //funcion manejadora de los inputs del formulario
  const handleInputsForm = ( e ) => {
     setInputs( { ...inputs, [e.target.name]: e.target.value } );
     console.log( inputs );
  }

  //para poder tener el control del input firstname debemos crear un useState
  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [email, setEmail] = useState("");

  //aqui debo declarar una funcion handle o manejadora para el input firstname
  // const handleFirstName = (e) => {
  //   setFirstName(e.target.value);
  //   console.log(firstname);
  // };

  // //manejadoras de lastname y email
  // const handleLastName = ({ target }) => {
  //   setLastName(target.value);
  //   console.log(lastname);
  // };

  // const handleEmail = ({ target }) => {
  //   const { value } = target;
  //   setEmail(value);
  //   console.log(email);
  // };

  //funcion manejadora del formulario
  const handleDataForm = () => {
    // alert(`Su nombre es ${firstname} ${lastname} y su correo ${email}`);
    alert( JSON.stringify( inputs ) );
    //ToDo: Queda pendiente el envio de datos hacia el server
  };

  return (
    <>
      <div className="card card-register">
        <h2>Formulario de Registro</h2>

        {/* inicio del formulario de Registro */}
        <form action="" onSubmit={ handleDataForm }>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Firstname"
              name="firstname"
              id="firstname"
              value={inputs.firstname}
              onChange={handleInputsForm}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Lastname"
              name="lastname"
              id="lastname"
              value={inputs.lastname}
              onChange={handleInputsForm}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="email"
              id="email"
              value={inputs.email}
              onChange={handleInputsForm}
            />
          </div>
          <button type='submit' className="btn btn-primary" >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
