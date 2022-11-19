import React, { useRef } from "react";
import { useState } from "react";
import { userSignUp } from "../../api/userApi";
import InputRegister from "./InputRegister";
import { Toast } from "primereact/toast"
import { showToast } from "../../utils";

const RegisterForm = () => {
  //creamos una constante para los toast
  const toast = useRef(null);

  //necesitamos un useState tipo objeto que tenga las mismas propiedades que los name de los inputs
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = inputs

  //funcion manejadora para controlar los valores de los inputs
  const handleInputsForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  //funcion manejadora del formulario
  const handleOnSubmit = async ( e ) => {
    e.preventDefault();
    
    //validacion de que los inputs no esten vacios
    if(!firstname || !lastname || !email || !password){
      alert('All inputs are required')
    }else{
      const result = await userSignUp(inputs) //llamamos a la api
      if(result.status){
        showToast('success', 'Success', result.message, toast)
        //limpiamos el formulario
        setInputs( {
          firstname:'',
          lastname:'',
          email:'',
          password:''
        })
        setTimeout(() => {
          window.location.href = '/'
        }, 3000);
      } else {
        showToast('warn', 'Warn', result.message, toast)
      }
    }
    
    
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="card card-register">
        <h2>Formulario de Registro</h2>

        {/* inicio del formulario de Registro */}
        <form action="" onSubmit={ handleOnSubmit }>
          <InputRegister title='First Name' type='text' name='firstname' value={inputs.firstname} handle={ handleInputsForm }/>
          <InputRegister title='Last Name' type='text' name='lastname' value={inputs.lastname} handle={ handleInputsForm }/>
          <InputRegister title='Email' type='email' name='email' value={inputs.email} handle={ handleInputsForm }/>
          <InputRegister title='Password' type='password' name='password' value={inputs.password} handle={ handleInputsForm }/>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
