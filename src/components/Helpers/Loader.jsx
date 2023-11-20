import "../../styles/Loader.css";

function Loader({ text }) {
  return (
    <div className="loader-container">
      <span className="loader"></span>
      <span>{text}</span>
    </div>
  );
}

export default Loader;
