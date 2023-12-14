import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import image from '../../assets/main_icon.png'
import {  useState } from "react";

export const NavBar = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState(() => JSON.parse(localStorage.getItem('user')) || null)

  const closeSesion = () => {
    localStorage.removeItem('user')
    setuser("")
    navigate('/', {replace: true} )
    location.reload()
  }

  const toNavigateIndex = () => navigate("/");

  console.log(user)

  return (
    <div className="navbar-container">
      <div className="navbar-container_links">
        <img onClick={toNavigateIndex} src={image} />
        <div>
          {
            user && user.isPay ? 
            <Link to={"/listardics"}>Dics registrados</Link>
            : 
            <Link to={"/inscripciondic"}>Inscripcion DIC</Link>
          }
          <Link to={"/adopcion"}>Poner Perro en Adopcion</Link>
          <Link to={"/sobrenosotros"}>Sobre Nosotros</Link>
          {
           user && <Link to={"/listaadoptados"}>Perros adoptados</Link>
          }
        </div>
      </div>
      <div className="nav-container_auth">
        {
          user === null ? (
            <>
            <Link to={"/acceder"}>Acceder</Link>
            <Link to={"/crearcuenta"}>Crear Cuenta</Link>
            </>
          )
          : <>
            <span>username: {user.username}</span>
            <a onClick={() => {
closeSesion()
            }}>cerrar session </a>
          </>
        }
      </div>
      <div className="navbar-container_link-mobile">
        <Link to="/acceder">Acceder</Link>
        <Link to="/crearcuenta">Crear Cuenta</Link>
        <Link to="/">Inicio</Link>
        <Link to="/incripciondic">Inscripcion DIC</Link>
        <Link to="/adopcion">Poner Perro en Adopcion</Link>
        <Link to="/nosotros">Sobre Nosotros</Link>
      </div>
    </div>
  );
};
