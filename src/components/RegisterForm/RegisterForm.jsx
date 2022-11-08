import React from "react";
import { useState } from "react";
import InputRegister from "./InputRegister";

const RegisterForm = () => {
  //necesitamos un useState tipo objeto que tenga las mismas propiedades que los name de los inputs
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  //funcion manejadora para controlar los valores de los inputs
  const handleInputsForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  //funcion manejadora del formulario
  const handleOnSubmit = ( e ) => {
    e.preventDefault();
    alert(JSON.stringify(inputs));
    //ToDo: Queda pendiente el envio de datos hacia el server

    //limpiamos el formulario
    setInputs( {
      firstname:'',
      lastname:'',
      email:'',
      password:''
    })
  };

  return (
    <>
      <div className="card card-register">
        <h2>Formulario de Registro</h2>

        {/* inicio del formulario de Registro */}
        <form action="" onSubmit={handleOnSubmit}>
          <InputRegister title='First Name' type='text' name='firstname' value={inputs.firstname} handle={ handleInputsForm }/>
          <InputRegister title='Last Name' type='text' name='lastname' value={inputs.lastname} handle={ handleInputsForm }/>
          <InputRegister title='Email' type='email' name='email' value={inputs.email} handle={ handleInputsForm }/>
          <InputRegister title='Password' type='password' name='password' value={inputs.password} handle={ handleInputsForm }/>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
