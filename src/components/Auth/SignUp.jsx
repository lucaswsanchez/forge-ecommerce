import "../../styles/Auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import signupimg from "../../assets/images/signup-img.jpg";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLock, MdLockOutline } from "react-icons/md";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      toast.error("Email ya en uso", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-form br-left">
          <h2>¿Usuario nuevo?</h2>
          <form onSubmit={handleSubmit}>
            <div className="auth-label">
              <label htmlFor="nombre">
                <FaUser />
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre..."
                required
              />
            </div>
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
            <div className="auth-label">
              <label htmlFor="repetirContrasena">
                <MdLockOutline />
              </label>
              <input
                type="password"
                id="repetirContrasena"
                name="repetirContrasena"
                placeholder="Repetir contraseña..."
                required
              />
            </div>
            <button type="submit">REGISTRARME</button>
          </form>
        </div>
        <div className="auth-img br-right">
          <img src={signupimg} alt="img" />
          <Link to="/login" className="auth-link">
            <span>Ya tengo una cuenta</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
