import "./IndexApp.css";

import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

//este es nuestro primer componente
const IndexApp = () => {
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
