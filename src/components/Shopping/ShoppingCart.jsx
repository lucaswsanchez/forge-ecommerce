import "../../styles/ShoppingCart.css";
import { Link } from "react-router-dom";
import smartphone1 from "../../assets/images/tecnologia/smartphone1.png";
import laptop1 from "../../assets/images/tecnologia/laptop1.png";
import { IoIosClose } from "react-icons/io";
import { useCart } from "../Context/CartContext";

function ShoppingCart() {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (productId) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: productId } });
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-promo">
          <div className="cart-promo-label">
            <label htmlFor="promo-code">Ingresa el codigo de tu cupon</label>
            <input
              id="promo-code"
              type="text"
              name="promo-code"
              maxLength="5"
            />
          </div>
          <button>Enviar</button>
        </div>
        <div className="cart-list">
          <ul>
            <li>Producto</li>
            <li>Precio</li>
            <li>Cantidad</li>
            <li>Subtotal</li>
          </ul>
        </div>
        {state.cart.map((item) => (
          <div key={item.id} className="cart-product">
            <div className="item">
              <div className="product-image">
                <img src={item.image} alt="product" />
              </div>
              <div className="product-details">
                <span>{item.name}</span>
                <span>Codigo del producto - {item.code}</span>
              </div>
            </div>
            <div className="price">${item.price}</div>
            <div className="quantity">{item.quantity}</div>
            <div className="subtotal">${item.price * item.quantity}</div>
            <div className="remove">
              <button onClick={() => handleRemoveItem(item.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
        {state.cart.map((item) => (
          <div key={item.id} className="cart-product-responsive">
            <div className="r-image">
              <img src={item.image} alt="product" />
            </div>
            <div className="r-product">
              <strong>Producto: </strong>
              <span>{item.name}</span>
            </div>
            <div className="r-price">
              <strong>Precio: </strong>${item.price}
            </div>
            <div className="r-quantity">
              <strong>Cantidad: </strong>
              {item.quantity}
            </div>
            <div className="r-subtotal">
              <strong>Subtotal: </strong>${item.price * item.quantity}
            </div>
            <div className="r-remove">
              <IoIosClose size={30} onClick={() => handleRemoveItem(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary-container">
        <div className="cart-summary">
          <div className="cart-summary-title">
            <span>Resumen de compra</span>
          </div>
          <div className="cart-summary-product">
            <div className="subtotal-title">Producto ({state.cart.length})</div>
            <div className="subtotal-value">
              $
              {state.cart.reduce((accumulatedPrice, subtotal) => {
                return accumulatedPrice + subtotal.price * subtotal.quantity;
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
                return accumulatedPrice + subtotal.price * subtotal.quantity;
              }, 0) + 4500}
            </div>
          </div>
          <div className="cart-summary-checkout">
            <Link to="/checkout" onClick={handleScroll}>
              <button>Finalizar compra</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
