import "../../styles/OrderConfirmation.css";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useCart } from "../Context/CartContext";
import forgelogo from "../../assets/images/forge-logo.png";
import smartphone1 from "../../assets/images/tecnologia/smartphone1.png";
import laptop1 from "../../assets/images/tecnologia/laptop1.png";
import { PiSealCheckFill } from "react-icons/pi";
import { IoCard } from "react-icons/io5";
import Loader from "../Helpers/Loader";

function OrderConfirmation() {
  const [user, setUser] = useState(null);
  const [payment, setPayment] = useState(false);
  const { state } = useCart();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setPayment(true);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="oc-container">
      {payment ? (
        <>
          <div className="oc-card">
            <div className="oc-card-title">
              <img src={forgelogo} alt="logo" />
            </div>
            <div className="oc-card-details">
              <p>Tu compra fue confirmada!</p>
              <p>
                Hola, <strong>{user.email}</strong>
              </p>
              <p>
                Has finalizado tu compra, haremos el envio del paquete dentro de
                los proximos 3 dias habiles.
              </p>
              <PiSealCheckFill className="check-icon" />
              <div className="oc-card-payment">
                <div className="oc-details">
                  <span>Fecha de compra</span>
                  <span>10/10/23</span>
                </div>
                <div className="oc-details">
                  <span>Compra Nº</span>
                  <span>#9999</span>
                </div>
                <div className="oc-details">
                  <span>Metodo de pago</span>
                  <IoCard className="card-icon" />
                </div>
                <div className="oc-details">
                  <span>Direccion del envio</span>
                  <span>Rivadavia 999</span>
                </div>
              </div>
              <div className="oc-card-products">
                {state.cart.map((item) => (
                  <div key={item.id} className="oc-product">
                    <div className="oc-product-img">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="oc-product-name">
                      <span>{item.name}</span>
                      <span>Cantidad: {item.quantity}</span>
                    </div>
                    <div className="oc-product-price">
                      <span>${item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="oc-card-total-container">
                <div className="oc-card-total">
                  <div className="oc-total">
                    <span>Subtotal</span>
                    <span>
                      $
                      {state.cart.reduce((accumulatedPrice, subtotal) => {
                        return (
                          accumulatedPrice + subtotal.price * subtotal.quantity
                        );
                      }, 0)}
                    </span>
                  </div>
                  <div className="oc-total">
                    <span>Envio</span>
                    <span>$4500</span>
                  </div>
                  <div className="oc-total">
                    <span>Impuestos</span>
                    <span>$50.000</span>
                  </div>
                  <div className="oc-total">
                    <span>TOTAL</span>
                    <span>
                      $
                      {state.cart.reduce((accumulatedPrice, subtotal) => {
                        return (
                          accumulatedPrice + subtotal.price * subtotal.quantity
                        );
                      }, 0) +
                        4500 +
                        50000}
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Te enviaremos el codigo de seguimiento del envio en cuanto sea
                despachado correctamente!
              </p>
              <p>Gracias por comprar con nosotros!</p>
              <p>
                <strong>Equipo de Forge Ecommerce</strong>
              </p>
            </div>
            <div className="oc-card-footer">
              <span>
                Tuviste inconvenientes? Visita nuestra seccion de ayuda al
                consumidor.
              </span>
            </div>
          </div>
        </>
      ) : (
        <Loader text="Tu pago esta siendo procesado" />
      )}
    </div>
  );
}

export default OrderConfirmation;
