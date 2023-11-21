import "../../styles/ShoppingCart.css";
import { Link } from "react-router-dom";
import smartphone1 from "../../assets/images/tecnologia/smartphone1.png";
import laptop1 from "../../assets/images/tecnologia/laptop1.png";
import { IoIosClose } from "react-icons/io";

function ShoppingCart() {
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
        <div className="cart-product-responsive">
          <div className="r-image">
            <img src={laptop1} alt="product" />
          </div>
          <div className="r-product">
            <strong>Producto: </strong>
            <span>
              Laptop FHD de 14 pulgadas (400 nits) con procesador Intel Core
              i7-10510U de 10ª generación de hasta 4.90 GHz, SSD PCIe de 1 TB,
              16 GB de RAM y Windows 11 Pro
            </span>
          </div>
          <div className="r-price">
            <strong>Precio: </strong>$999.999
          </div>
          <div className="r-quantity">
            <strong>Cantidad: </strong>
            <input type="number" min="1" />
          </div>
          <div className="r-subtotal">
            <strong>Subtotal: </strong>$999.999
          </div>
          <div className="r-remove">
            <IoIosClose size={30} />
          </div>
        </div>
        <div className="cart-product-responsive">
          <div className="r-image">
            <img src={laptop1} alt="product" />
          </div>
          <div className="r-product">
            <strong>Producto: </strong>
            <span>
              Laptop FHD de 14 pulgadas (400 nits) con procesador Intel Core
              i7-10510U de 10ª generación de hasta 4.90 GHz, SSD PCIe de 1 TB,
              16 GB de RAM y Windows 11 Pro
            </span>
          </div>
          <div className="r-price">
            <strong>Precio: </strong>$999.999
          </div>
          <div className="r-quantity">
            <strong>Cantidad: </strong>
            <input type="number" min="1" />
          </div>
          <div className="r-subtotal">
            <strong>Subtotal: </strong>$999.999
          </div>
          <div className="r-remove">
            <IoIosClose size={30} />
          </div>
        </div>
        <div className="cart-product-responsive">
          <div className="r-image">
            <img src={laptop1} alt="product" />
          </div>
          <div className="r-product">
            <strong>Producto: </strong>
            <span>
              Laptop FHD de 14 pulgadas (400 nits) con procesador Intel Core
              i7-10510U de 10ª generación de hasta 4.90 GHz, SSD PCIe de 1 TB,
              16 GB de RAM y Windows 11 Pro
            </span>
          </div>
          <div className="r-price">
            <strong>Precio: </strong>$999.999
          </div>
          <div className="r-quantity">
            <strong>Cantidad: </strong>
            <input type="number" min="1" />
          </div>
          <div className="r-subtotal">
            <strong>Subtotal: </strong>$999.999
          </div>
          <div className="r-remove">
            <IoIosClose size={30} />
          </div>
        </div>
        <div className="cart-product-responsive">
          <div className="r-image">
            <img src={laptop1} alt="product" />
          </div>
          <div className="r-product">
            <strong>Producto: </strong>
            <span>
              Laptop FHD de 14 pulgadas (400 nits) con procesador Intel Core
              i7-10510U de 10ª generación de hasta 4.90 GHz, SSD PCIe de 1 TB,
              16 GB de RAM y Windows 11 Pro
            </span>
          </div>
          <div className="r-price">
            <strong>Precio: </strong>$999.999
          </div>
          <div className="r-quantity">
            <strong>Cantidad: </strong>
            <input type="number" min="1" />
          </div>
          <div className="r-subtotal">
            <strong>Subtotal: </strong>$999.999
          </div>
          <div className="r-remove">
            <IoIosClose size={30} />
          </div>
        </div>
        <div className="cart-product-responsive">
          <div className="r-image">
            <img src={laptop1} alt="product" />
          </div>
          <div className="r-product">
            <strong>Producto: </strong>
            <span>
              Laptop FHD de 14 pulgadas (400 nits) con procesador Intel Core
              i7-10510U de 10ª generación de hasta 4.90 GHz, SSD PCIe de 1 TB,
              16 GB de RAM y Windows 11 Pro
            </span>
          </div>
          <div className="r-price">
            <strong>Precio: </strong>$999.999
          </div>
          <div className="r-quantity">
            <strong>Cantidad: </strong>
            <input type="number" min="1" />
          </div>
          <div className="r-subtotal">
            <strong>Subtotal: </strong>$999.999
          </div>
          <div className="r-remove">
            <IoIosClose size={30} />
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
