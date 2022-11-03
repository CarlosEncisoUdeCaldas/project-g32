import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
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
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
