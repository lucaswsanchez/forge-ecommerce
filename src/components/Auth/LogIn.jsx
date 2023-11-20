import "../../styles/Auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import loginimg from "../../assets/images/login-img.png";
import { IoIosMail } from "react-icons/io";
import { MdLock } from "react-icons/md";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      toast.error("Email o contraseña incorrectos", {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-img br-left">
          <img src={loginimg} alt="img" />
          <Link to="/signup" className="auth-link">
            <span>Crea tu cuenta</span>
          </Link>
        </div>
        <div className="auth-form br-right">
          <h2>Ingresa a tu cuenta</h2>
          <form onSubmit={handleSubmit}>
            <div className="auth-label">
              <label htmlFor="email">
                <IoIosMail />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="auth-label">
              <label htmlFor="contrasena">
                <MdLock />
              </label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                placeholder="Contraseña..."
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">INICIAR SESION</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
