import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../../App";

const TopNav = () => {
  const history = useHistory();
  const { loggedInUser, setLoggedInUser } = useContext(AppContext);
  console.log("loggedInUser", loggedInUser);

  const userInfo = JSON.parse(window.localStorage.getItem("user"));
  console.log(userInfo);

  // logout function
  const logOut = () => {
    setLoggedInUser("");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand ms-5">
          <img
            style={{ width: "90px" }}
            src="https://thumbs.dreamstime.com/b/bicycle-rider-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-133733804.jpg"
            alt=""
          />
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
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/news" className="nav-link">
                News
              </Link>
            </li>
            {!loggedInUser ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                {loggedInUser.role === "admin" ? (
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  ""
                )}

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
