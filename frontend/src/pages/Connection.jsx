import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function Connection() {
  const { setUser } = useContext(UserContext);

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const naviguate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          email,
          password,
        }
      );
      if (res.status === 200) {
        setUser(res.data);
        naviguate("/onboarding");
      } else {
        console.error("Mauvais identifiants");
      }
    } catch {
      setPopupIsOpen(true);
    }
  };

  return (
    <div className="total-container">
      <div className="title">
        <h1>EPSI Go</h1>
      </div>
      <div className="presentation">
        <p>Tes premiers pas chez EPSI</p>
      </div>
      <div>
        <form onSubmit={handleLogin} className="form-connection">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Adresse Email"
              ref={emailRef}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Mot de passe"
              ref={passwordRef}
              required
            />
          </div>
          <button className="button-connection" type="submit">
            Se connecter
          </button>
        </form>
        <div className="create-account">
          <p>Vous n'avez pas encore de compte ?</p>
          <NavLink className="navlink-create-account" to="/createaccount">
            <button className="button-create-account" type="submit">
              Créer un compte
            </button>
          </NavLink>
        </div>
      </div>
      {popupIsOpen && (
        <div className="popup">
          <h2>Mauvais identifiants</h2>
          <button type="button" onClick={() => setPopupIsOpen(false)}>
            Fermer
          </button>
        </div>
      )}
    </div>
  );
}

export default Connection;
