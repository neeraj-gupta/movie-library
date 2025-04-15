import "../css/NavBar.css";
import { Link } from "react-router-dom";

function NavBAr() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand">
          Movie Library
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/favorites" className="link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBAr;
