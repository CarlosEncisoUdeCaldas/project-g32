import { Link } from "react-router-dom";

const NavBar = () => {
  //Creacion del array que contiene los datos de los navItems
  const navItems = [
    { ruta: "/", icono: "bi bi-house", texto: "Home" },
    { ruta: "/contador", icono: "bi bi-calculator", texto: "Contador" },
    { ruta: "/saludo", icono: "bi bi-hand-thumbs-up", texto: "Saludo" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* usamos el metodo map en el array navItems para renderizar la barra de navegacion */}
            { navItems.map( ( {ruta, icono, texto} ) => {
              return (
                <li className="nav-item">
                  <Link className="nav-link" to={ ruta }>
                    <i className={ icono }></i>
                    { texto }
                  </Link>
                </li>
              );
            }) }

            {/* <li className="nav-item">
              <Link className="nav-link" to={ '/' } >
                <i className="bi bi-house"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contador'>
              <i className="bi bi-calculator"></i>
                Contador
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/saludo'}>
              <i className="bi bi-hand-thumbs-up"></i>
                Saludo
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
