import "../../styles/ProductDetail.css";
import ProductSlider from "./ProductSlider";

function ProductDetail() {
  return (
    <div className="pd-container">
      <div className="pd-img">
        <ProductSlider />
      </div>
      <div className="pd-text">
        <p>
          Laptop FHD de 14 pulgadas (400 nits) con procesador Intel Core
          i7-10510U de 10ª generación de hasta 4.90 GHz, SSD PCIe de 1 TB, 16 GB
          de RAM y Windows 11 Pro
        </p>
        <span>$999.000</span>
        <div className="pd-features">
          <span>Caracteristicas clave</span>
          <ul>
            <li>La mas reciente tecnologia</li>
            <li>Componentes de primera categoria</li>
            <li>Dimensiones 99,6 x 99,6 x 99,6</li>
            <li>Libre de mantenimiento</li>
            <li>5 años de garantia</li>
          </ul>
        </div>
        <div className="pd-quantity-btn">
          <input type="number" id="quantity" name="quantity" min="1" max="99" />
          <button>Agregar al carrito</button>
        </div>
        <span className="pd-category">
          Categoria: <strong>Tecnologia</strong>
        </span>
      </div>
    </div>
  );
}

export default ProductDetail;
