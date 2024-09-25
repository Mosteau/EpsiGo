import logo from "../assets/logoprincipal.png";
import logoutIcon from "../assets/logout.png";

function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-logout">
        <button type="button" onClick={logout}>
          <img src={logoutIcon} alt="Logout" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
