import React from 'react'
import { Link } from 'react-router-dom';

const NavItems = ( { items } ) => {
  return (
    items.map( ( { ruta, icono, texto } ) => {
        return (
          <li className="nav-item" key={ texto }>
            <Link className="nav-link" to={ ruta }>
              <i className={ icono }></i>
              { texto }
            </Link>
          </li>
        );
      }) 
  )
}

export default NavItems