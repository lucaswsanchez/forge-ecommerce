import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import smartphone1 from "../../assets/images/tecnologia/smartphone1.png";
import smartphone2 from "../../assets/images/tecnologia/smartphone2.jpg";
import smartphone3 from "../../assets/images/tecnologia/smartphone3.jpg";

function ProductSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={smartphone1} />
        </div>
        <div>
          <img src={smartphone2} />
        </div>
        <div>
          <img src={smartphone3} />
        </div>
      </Slider>
    </div>
  );
}

export default ProductSlider;
