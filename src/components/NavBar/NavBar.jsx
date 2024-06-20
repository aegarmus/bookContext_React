import { useContext } from "react";
import { Link } from "react-router-dom";
import UsersContext from "../../context/userContext/UsersContext";
import "./NavBar.css";

export const NavBar = () => {
  const userCtx = useContext(UsersContext);
  const { authStatus, userData, logout } = userCtx;

  console.log("authStatus:", authStatus);
  console.log("userData:", userData);

  return (
    <nav>
      <div>LOGO</div>
      <ul>
        <li>
          <Link className="nav__item" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="nav__item" to="/about">
            Sobre Nosotros
          </Link>
        </li>
        <li>
          <Link className="nav__item" to="/users">
            Usuarios
          </Link>
        </li>
        <li>
          <Link className="nav__item" to="/books">
            Libros
          </Link>
        </li>
      </ul>
      {authStatus ? (
        <>
          <div>
            <Link className="nav__item btn btn__registro" to="/">
              {userData.nombre} {userData.apellido}
            </Link>
            <Link
              className="nav__item btn btn__login"
              to="/login"
              onClick={logout}
            >
              Cerrar Sesión
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link className="nav__item btn btn__registro" to="/signup">
              Registro
            </Link>
            <Link className="nav__item btn btn__login" to="/login">
              Iniciar Sesión
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};
