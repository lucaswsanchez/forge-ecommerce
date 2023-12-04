import "../../styles/Products.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useProductContext } from "../Context/ProductContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaRegStar } from "react-icons/fa";

function Products() {
  const { products } = useProductContext();
  const [user, setUser] = useState(null);
  const [showSeeMore, setShowSeeMore] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleHoverEnter = (productId) => {
    if (user) {
      setShowSeeMore(productId);
    }
  };

  const handleHoverLeave = () => {
    setShowSeeMore(null);
  };

  const handleClick = (productId) => {
    if (user) {
      navigate(`/product-detail/${productId}`);
      window.scrollTo(0, 0);
    } else {
      toast.error("Debes iniciar sesion para ver mas.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const truncateWords = (text, numWords) => {
    const words = text.split(" ");

    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    }

    return text;
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaRegStar key={index} />
  ));

  return (
    <div className="products-container">
      <div className="products-title">
        <h2>Nuestros productos destacados</h2>
      </div>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div
              className="product-img"
              onMouseEnter={() => handleHoverEnter(product.id)}
              onMouseLeave={handleHoverLeave}
              onClick={() => handleClick(product.id)}
            >
              <img src={product.image} alt={product.name} />
              {showSeeMore === product.id && (
                <button className="see-more-btn">Ver más</button>
              )}
            </div>
            <div className="product-text">
              <div className="product-rating">{stars}</div>
              <div className="product-name">
                {truncateWords(product.name, 6)}
              </div>
              <div className="product-price">${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
