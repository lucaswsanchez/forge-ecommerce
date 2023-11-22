import "../../styles/ProductDetail.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductContext } from "../Context/ProductContext";
import { useCart } from "../Context/CartContext";
import ProductSlider from "./ProductSlider";
import { useParams } from "react-router-dom";
import { useState } from "react";

function ProductDetail() {
  const { productId } = useParams();
  const { products } = useProductContext();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (products.Length === 0) return <div>Loading...</div>;

  const productDetails = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!productDetails) return <div>Loading...</div>;

  const handleAddToCart = () => {
    toast.success("El producto fue agregado al carrito!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: productDetails.id,
        image: productDetails.image,
        name: productDetails.name,
        price: productDetails.price,
        code: productDetails.code,
        quantity,
      },
    });
  };

  return (
    <div className="pd-container">
      <div className="pd-img">
        <ProductSlider
          image1={productDetails.image}
          image2={productDetails.image2}
          image3={productDetails.image3}
        />
      </div>
      <div className="pd-text">
        <p>{productDetails.name}</p>
        <span>${productDetails.price}</span>
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
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
        <span className="pd-category">
          Categoria: <strong>{productDetails.category}</strong>
        </span>
      </div>
    </div>
  );
}

export default ProductDetail;
