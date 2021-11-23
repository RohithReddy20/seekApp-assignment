import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { auth } from "../service/firebase";

function Navbar({ user }) {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const logout = () => {
    auth.signOut();
  };

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo" exact>
            <img src="./logo.svg" alt="logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={click ? handleClick : null}
                exact
              >
                People
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/mypeople"
                className="nav-links"
                onClick={click ? handleClick : null}
                exact
              >
                My People
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/logout" className="nav-links" onClick={logout} exact>
                Logout
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
