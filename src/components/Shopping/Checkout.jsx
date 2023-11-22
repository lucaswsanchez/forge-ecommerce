import "../../styles/Checkout.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Loader from "../Helpers/Loader";
import frontcard from "../../assets/images/front-card.png";
import backcard from "../../assets/images/back-card.png";

function Checkout() {
  const [order, setOrder] = useState(false);
  const { state } = useCart();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOrder(true);
    }, 4000);

    return () => clearTimeout(timeOut);
  }, []);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="checkout-container">
      {order ? (
        <>
          <div className="checkout">
            <div className="checkout-card">
              <div className="checkout-data">
                <form>
                  <div className="checkout-label">
                    <label htmlFor="card-number">Número de tarjeta</label>
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      maxLength="16"
                      required
                    />
                  </div>
                  <div className="checkout-label">
                    <label htmlFor="name">Nombre en la tarjeta</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="checkout-label-code">
                    <div className="checkout-label">
                      <label htmlFor="expiration">Fecha de vencimiento</label>
                      <input
                        type="text"
                        id="expiration"
                        name="expiration"
                        required
                      />
                    </div>
                    <div className="checkout-label">
                      <label htmlFor="code">Codigo de seguridad</label>
                      <input type="text" id="code" name="code" required />
                    </div>
                  </div>
                  <div className="checkout-label">
                    <label htmlFor="dni">DNI del titular de la tarjeta</label>
                    <input type="text" id="dni" name="dni" required />
                  </div>
                  <Link to="/order-confirmation" onClick={handleScroll}>
                    <button type="submit">Realizar pago</button>
                  </Link>
                </form>
              </div>
              <div className="checkout-img">
                <img src={frontcard} alt="frontcard" />
                <img src={backcard} alt="backcard" />
              </div>
            </div>
          </div>
          <div className="cart-summary-container">
            <div className="cart-summary">
              <div className="cart-summary-title">
                <span>Resumen de compra</span>
              </div>
              <div className="cart-summary-product">
                <div className="subtotal-title">
                  Producto ({state.cart.length})
                </div>
                <div className="subtotal-value">
                  $
                  {state.cart.reduce((accumulatedPrice, subtotal) => {
                    return (
                      accumulatedPrice + subtotal.price * subtotal.quantity
                    );
                  }, 0)}
                </div>
              </div>
              <div className="cart-summary-delivery">
                <div className="subtotal-title">Envio</div>
                <div className="subtotal-value">$4.500</div>
              </div>
              <div className="cart-summary-total">
                <div className="total-title">TOTAL</div>
                <div className="total-value">
                  $
                  {state.cart.reduce((accumulatedPrice, subtotal) => {
                    return (
                      accumulatedPrice + subtotal.price * subtotal.quantity
                    );
                  }, 0) + 4500}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader text="Pedido en proceso" />
      )}
    </div>
  );
}

export default Checkout;
