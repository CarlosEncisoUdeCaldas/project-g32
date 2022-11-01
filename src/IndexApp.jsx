import Contador from "./components/Contador/Contador";
import "./IndexApp.css";
import Saludo from "./components/Saludo/Saludo";
import NavBar from "./components/NavBar/NavBar";

//este es nuestro primer componente
const IndexApp = () => {
  const grupo = 32;

  return (
    <>
      {/* <h1 className="saludo">Hola Mundo, Grupo {grupo} </h1>
      <p>Mision Tic 2022</p>
      <p>Esto es un Fragmento</p>
      <Saludo nombre="Pepe" apellido="Cortisona" grupo={ 7 } /> */}
      <NavBar />
      <Contador value={0} />
    </>
  );
};

export default IndexApp;
