import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as Ruta } from "react-scroll";

export default function Header({ scroll, menuMobile, setMenuMobile }) {

  const location = useLocation();

  const menuOff = () => {
    if (menuMobile) {
      setMenuMobile(false);
    }
  }

  return (
    <header className={menuMobile || scroll > 100 ? "header bg-active" : "header"}>
      <div className="content-header">
        <Link to="/" className="header-link" onClick={menuOff}>
          <h2>Mi Portafolio</h2>
        </Link>
        <nav
          className={
            menuMobile
              ? "content-header__navegacion animation-menu"
              : "content-header__navegacion"
          }
        >
          <li className="nav-item">
            <Ruta
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={menuOff}
            >
              Perfil
            </Ruta>
          </li>
          <li className="nav-item">
            <Ruta
              to="proyectos"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={menuOff}
            >
              Proyectos
            </Ruta>
          </li>
          <li className="nav-item">
            <Ruta
              to="contacto"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={menuOff}
            >
              Contactame
            </Ruta>
          </li>
          <li className="nav-item">
            <Link
              to="/copyrigth"
              className={location.pathname === "/copyrigth" ? "active" : ""}
              onClick={menuOff}
            >
              Copyrigth
            </Link>
          </li>
        </nav>
        <div className="content-btn">  
           <div className={
            menuMobile
              ? "menuToggle animation-menuToggle"
              : "menuToggle"
          }  onClick={() => setMenuMobile(!menuMobile)}>
            </div>
        </div>
      </div>
    </header>
  );
}
