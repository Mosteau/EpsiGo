import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logoprincipal.png";
import logoutIcon from "../assets/logout.png";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      {location.pathname === "/home" && (
        <div className="navbar-logout">
          <button type="button" onClick={logout}>
            <img src={logoutIcon} alt="Logout" />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
