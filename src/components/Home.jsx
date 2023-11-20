import "../styles/Home.css";
import Features from "./Home/Features";
import Products from "./Home/Products";

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <Features />
      </div>
      <div className="home-products">
        <Products />
      </div>
    </div>
  );
}

export default Home;
