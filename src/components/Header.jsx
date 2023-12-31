import "../styles/Header.css";
import "../styles/Animations.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";

import forgelogo from "../assets/images/forge-logo.png";
import { FaUserTie } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [showResponsiveDropdown, setResponsiveDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDropdown = () => {
    setResponsiveDropdown(!showResponsiveDropdown);
  };

  return (
    <div className="header-container ">
      <div className="header-main">
        <div className="header-logo">
          <IoMenu className="header-menu" onClick={handleDropdown} />
          <Link to="/" className="link">
            <img src={forgelogo} alt="logo" />
          </Link>
        </div>
        <div className="header-user">
          {user ? (
            <div className="user-in">
              <div className="dropdown">
                <button className="dropbtn">
                  <FaUserTie />
                </button>
                <div className="dropdown-content">
                  <a>Mi perfil</a>
                  <a>Mis compras</a>
                  <a>Mis opiniones</a>
                  <a>Cupones</a>
                  <a onClick={handleLogout}>
                    <strong>Cerrar sesion</strong>
                  </a>
                </div>
              </div>
              <div className="user-in-text">
                <span>Bienvenido, ingresaste como: </span>
                <span>{user.email}</span>
              </div>
              <div className="cart-icon">
                <Link to="/shopping-cart">
                  <GiShoppingCart />
                </Link>
              </div>
            </div>
          ) : (
            <div className="user-out">
              <Link to="/login">
                <button>INICIAR SESION</button>
              </Link>
              <Link to="/signup">
                <button>REGISTRARSE</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="header-secondary">
        <div className="header-nav">
          <ul>
            <li>Tecnologia</li>
            <li>Cocina</li>
            <li>Electrodomesticos</li>
            <li>Nuevos ingresos</li>
            <li>OFERTAS!</li>
          </ul>
        </div>
      </div>
      {showResponsiveDropdown && (
        <div className="responsive-dropdown slide-in-left">
          <ul>
            {user ? (
              <>
                <li className="user-in-responsive">
                  <FaUserTie size={35} color="black" /> Hola,
                  <strong>{user.email}</strong>
                </li>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li>
                    <strong>INICIAR SESION</strong>
                  </li>
                </Link>
                <Link to="/signup">
                  <li>
                    <strong>REGISTRARSE</strong>
                  </li>
                </Link>
              </>
            )}
            <li>Tecnologia</li>
            <li>Cocina</li>
            <li>Electrodomesticos</li>
            <li>Nuevos ingresos</li>
            <li>OFERTAS!</li>
            {user && (
              <li onClick={handleLogout}>
                <strong>CERRAR SESION</strong>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
