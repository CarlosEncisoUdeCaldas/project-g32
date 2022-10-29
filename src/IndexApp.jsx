import Contador from "./Contador/Contador";
import "./IndexApp.css";
import Saludo from "./Saludo/Saludo";

//este es nuestro primer componente
const IndexApp = () => {
  const grupo = 32;

  return (
    <>
      {/* <h1 className="saludo">Hola Mundo, Grupo {grupo} </h1>
      <p>Mision Tic 2022</p>
      <p>Esto es un Fragmento</p>
      <Saludo nombre="Pepe" apellido="Cortisona" grupo={ 7 } /> */}

      <Contador value={ 0 } />
    </>
  );
};

export default IndexApp;
