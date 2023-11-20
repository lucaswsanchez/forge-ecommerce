import "../styles/Footer.css";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import logodark from "../assets/images/logo-dark.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <div className="footer-info-img">
          <img src={logodark} alt="logo" />
        </div>
        <div className="footer-info-section">
          <span>
            <strong>Tienda</strong>
          </span>
          <span>Ofertas destacadas</span>
          <span>Categorias</span>
          <span>Marcas</span>
          <span>Reembolsos</span>
          <span>Ofertas semanales</span>
        </div>
        <div className="footer-info-section">
          <span>
            <strong>¿Necesitas ayuda?</strong>
          </span>
          <span>Contacto</span>
          <span>Seguimiento de pedidos</span>
          <span>Preguntas frecuentes</span>
          <span>Politica de devoluciones</span>
          <span>Politica de privacidad</span>
        </div>
        <div className="footer-info-section">
          <span>
            <strong>Contacto</strong>
          </span>
          <span>Rivadavia 999, Ciudad de Corrientes</span>
          <span>3400</span>
          <span>forge@info.com</span>
          <span>+54 9 3794 999999</span>
        </div>
      </div>
      <div className="footer-end">
        <div className="footer-text">
          <span>© 2023 Forge Ecommerce. Powered by Lucas Sanchez</span>
        </div>
        <div className="footer-icons">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcStripe />
        </div>
      </div>
    </div>
  );
}

export default Footer;
