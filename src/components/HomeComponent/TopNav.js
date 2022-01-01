import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../../App";

const TopNav = () => {
  const history = useHistory();
  const { loggedInUser, setLoggedInUser } = useContext(AppContext);
  console.log(loggedInUser, "app");

  // logout function
  const logOut = () => {
    setLoggedInUser("");
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Rider
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!loggedInUser ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Register
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <p onClick={logOut} className="nav-link pointer">
                    Logout
                  </p>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
