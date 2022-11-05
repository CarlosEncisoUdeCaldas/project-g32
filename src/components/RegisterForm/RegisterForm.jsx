import React from "react";
import { useState } from "react";

const RegisterForm = () => {
  //para poder tener el control del input firstname debemos crear un useState
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  //aqui debo declarar una funcion handle o manejadora para el input firstname
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstname);
  };

  //manejadoras de lastname y email
  const handleLastName = ( { target } ) => {
    setLastName(target.value)
    console.log(lastname);
  };

  const handleEmail = ( { target }) => {
    const { value } = target
    setEmail( value )
    console.log(email);
  };

  //funcion manejadora del boton
  const handleShowInfo = () => {
    alert(`Su nombre es ${firstname} ${lastname} y su correo ${email}`);
  };

  return (
    <>
      <div className="card card-register">
        <h2>Formulario de Registro</h2>
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
            value={firstname}
            onChange={handleFirstName}
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
            value={lastname}
            onChange={handleLastName}
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
            value={email}
            onChange={handleEmail}
          />
        </div>
        <button className="btn btn-success" onClick={ handleShowInfo }>
          Send
        </button>
      </div>
    </>
  );
};

export default RegisterForm;
