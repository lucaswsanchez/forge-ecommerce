import "../../styles/Products.css";
import { Link } from "react-router-dom";
import smartphone1 from "../../assets/images/tecnologia/smartphone1.png";
import heladera1 from "../../assets/images/cocina/heladera1.png";
import lavarropas1 from "../../assets/images/electrodomesticos/lavarropas1.png";
import { FaRegStar } from "react-icons/fa";

function Products() {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaRegStar key={index} />
  ));

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="products-container">
      <div className="products-title">
        <h2>Nuestros productos destacados</h2>
      </div>
      <div className="products">
        <Link to="/product-detail" onClick={handleScroll}>
          <div className="product">
            <div className="product-img">
              <img src={smartphone1} alt="smartphone" />
            </div>
            <div className="product-text">
              <div className="product-name">Smartphone 64gb 8gb ram</div>
              <div className="product-price">$999.999</div>
              <div className="product-rating">{stars}</div>
            </div>
          </div>
        </Link>
        <div className="product">
          <div className="product-img">
            <img src={heladera1} alt="heladera" />
          </div>
          <div className="product-text">
            <div className="product-name">Heladera Doble Puerta Inox</div>
            <div className="product-price">$679.999</div>
            <div className="product-rating">{stars}</div>
          </div>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={lavarropas1} alt="lavarropa" />
          </div>
          <div className="product-text">
            <div className="product-name">Lavarropa Automatico 12.000rpm</div>
            <div className="product-price">$350.000</div>
            <div className="product-rating">{stars}</div>
          </div>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={smartphone1} alt="smartphone" />
          </div>
          <div className="product-text">
            <div className="product-name">Smartphone 64gb 8gb ram</div>
            <div className="product-price">$999.999</div>
            <div className="product-rating">{stars}</div>
          </div>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={smartphone1} alt="smartphone" />
          </div>
          <div className="product-text">
            <div className="product-name">Smartphone 64gb 8gb ram</div>
            <div className="product-price">$999.999</div>
            <div className="product-rating">{stars}</div>
          </div>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={smartphone1} alt="smartphone" />
          </div>
          <div className="product-text">
            <div className="product-name">Smartphone 64gb 8gb ram</div>
            <div className="product-price">$999.999</div>
            <div className="product-rating">{stars}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
