import Contador from "./components/Contador/Contador";
import "./IndexApp.css";
import Saludo from "./components/Saludo/Saludo";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

//este es nuestro primer componente
const IndexApp = () => {
  const grupo = 32;

  return (
    <>
      <header>
        <NavBar />
      </header>
      
      <main>
        <Outlet />
      </main>
      

    </>
  );
};

export default IndexApp;
