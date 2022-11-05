
import NavItems from "./NavItems";

const NavBar = () => {
  //Creacion del array que contiene los datos de los navItems
  const navItemsLeft = [
    { ruta: "/", icono: "bi bi-house", texto: "Home" },
    { ruta: "/contador", icono: "bi bi-calculator", texto: "Contador" },
    { ruta: "/saludo", icono: "bi bi-hand-thumbs-up", texto: "Saludo" },
  ];

  const navItemsRight = [
    {ruta: "/register", icono: "bi bi-box-arrow-in-right", texto: "Register"},
    {ruta: "/login", icono: "bi bi-person", texto: "Login"}
  ]

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* usamos el metodo map en el array navItems para renderizar la barra de navegacion */}
            <NavItems items = { navItemsLeft } />
          </ul>
        </div>
        <div className="container-fluid" style={{ justifyContent: 'end' }}>
          <ul className="navbar-nav">
            <NavItems items = { navItemsRight } />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
