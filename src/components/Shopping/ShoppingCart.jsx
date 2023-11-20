import "../../styles/ShoppingCart.css";
import smartphone1 from "../../assets/images/tecnologia/smartphone1.png";
import { Link } from "react-router-dom";

function ShoppingCart() {
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
        <div className="cart-product">
          <div className="item">
            <div className="product-image">
              <img src={smartphone1} alt="product" />
            </div>
            <div className="product-details">
              <span>
                <strong>Smartphone</strong> 64gb 8gb ram DUAL SIM Verde Vidrio
              </span>
              <span>Codigo del producto - 232321939</span>
            </div>
          </div>
          <div className="price">$999.999</div>
          <div className="quantity">
            <input type="number" min="1" />
          </div>
          <div className="subtotal">$999.999</div>
          <div className="remove">
            <button>Eliminar</button>
          </div>
        </div>
        <div className="cart-product">
          <div className="item">
            <div className="product-image">
              <img src={smartphone1} alt="product" />
            </div>
            <div className="product-details">
              <span>
                <strong>Smartphone</strong> 64gb 8gb ram DUAL SIM Verde Vidrio
              </span>
              <span>Codigo del producto - 232321939</span>
            </div>
          </div>
          <div className="price">$999.999</div>
          <div className="quantity">
            <input type="number" min="1" />
          </div>
          <div className="subtotal">$999.999</div>
          <div className="remove">
            <button>Eliminar</button>
          </div>
        </div>
        <div className="cart-product">
          <div className="item">
            <div className="product-image">
              <img src={smartphone1} alt="product" />
            </div>
            <div className="product-details">
              <span>
                <strong>Smartphone</strong> 64gb 8gb ram DUAL SIM Verde Vidrio
              </span>
              <span>Codigo del producto - 232321939</span>
            </div>
          </div>
          <div className="price">$999.999</div>
          <div className="quantity">
            <input type="number" min="1" />
          </div>
          <div className="subtotal">$999.999</div>
          <div className="remove">
            <button>Eliminar</button>
          </div>
        </div>
        <div className="cart-product">
          <div className="item">
            <div className="product-image">
              <img src={smartphone1} alt="product" />
            </div>
            <div className="product-details">
              <span>
                <strong>Smartphone</strong> 64gb 8gb ram DUAL SIM Verde Vidrio
              </span>
              <span>Codigo del producto - 232321939</span>
            </div>
          </div>
          <div className="price">$999.999</div>
          <div className="quantity">
            <input type="number" min="1" />
          </div>
          <div className="subtotal">$999.999</div>
          <div className="remove">
            <button>Eliminar</button>
          </div>
        </div>
      </div>
      <div className="cart-summary-container">
        <div className="cart-summary">
          <div className="cart-summary-title">
            <span>Resumen de compra</span>
          </div>
          <div className="cart-summary-product">
            <div className="subtotal-title">Producto (4)</div>
            <div className="subtotal-value">$999.999</div>
          </div>
          <div className="cart-summary-delivery">
            <div className="subtotal-title">Envio</div>
            <div className="subtotal-value">$4.500</div>
          </div>
          <div className="cart-summary-total">
            <div className="total-title">TOTAL</div>
            <div className="total-value">$4.004.496</div>
          </div>
          <div className="cart-summary-checkout">
            <Link to="/checkout">
              <button>Finalizar compra</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
