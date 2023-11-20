import "../../styles/Features.css";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoMdChatboxes } from "react-icons/io";
import { GiReturnArrow } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa";

function Features() {
  return (
    <div className="home-features">
      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <GiCommercialAirplane />
          </div>
          <div className="feature-text">
            <span className="feature-text-title ">Envios gratis</span>
            <span>En compras de mas de $20.000</span>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <IoMdChatboxes />
          </div>
          <div className="feature-text">
            <span className="feature-text-title ">Asesor 24/7</span>
            <span>Chatea con nuestros asesores</span>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <GiReturnArrow />
          </div>
          <div className="feature-text">
            <span className="feature-text-title ">Satisfecho o devolucion</span>
            <span>Devolucion facil de 30-dias</span>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <FaCreditCard />
          </div>
          <div className="feature-text">
            <span className="feature-text-title ">Pagos 100% seguros</span>
            <span>Visa, Mastercard, PayPal, Stripe</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
