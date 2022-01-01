import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container">
      <div class="row g-2">
        <div class="col-6 col-md-4">
          <div class="position-absolute top-50 start-10 translate-middle-y">
            <h1> Ride sharing App </h1>
            <Link to="/welcome">
              <button
                style={{
                  width: "100%",
                  outline: "none",
                  border: "none",
                  padding: "5px",
                  color: "white",
                  fontWeight: "bolder",
                  borderRadius: "20px",
                  background: "#3498db",
                  marginTop: "20px",
                }}
              >
                {" "}
                Get Start{" "}
              </button>
            </Link>
          </div>
        </div>
        <div class="col-sm-6 col-md-8">
          {" "}
          <img
            src="https://cdn.dribbble.com/users/1150247/screenshots/4817518/800.png?compress=1&resize=800x600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
