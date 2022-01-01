import React from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Packages = () => {
  let history = useHistory();

  const packagesHandler = () => {
    history.push(`/payment`);
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4 pt-4 mb-5">
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title text-center"> Car driving</h5>
              <h2 class="card-text text-center"> 200$ 15 Days</h2>
              <p class="card-text text-center"> 15 Days Membership</p>
              <p class="card-text text-center"> 25 jobs posting</p>
              <p class="card-text text-center"> 30 featured jobs</p>
              <p class="card-text text-center"> 10 refresh jobs</p>
              <h6 class="card-text text-center">
                {" "}
                No Download Resume Attach file
              </h6>
              <p class="card-text text-center"> Job displayed for 35 days</p>
              <p class="card-text text-center"> Featured Company</p>

              <Link to="/payment">
                {" "}
                <button
                  onClick={packagesHandler}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "blue",
                    color: "white",
                    font: "bold",
                    borderRadius: "20px",
                  }}
                >
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title text-center">Bike Driving</h5>
              <h2 class="card-text text-center">100$ 15 Days</h2>
              <p class="card-text text-center"> 15 Days Membership</p>
              <p class="card-text text-center"> 25 jobs posting</p>
              <p class="card-text text-center"> 30 featured jobs</p>
              <p class="card-text text-center"> 10 refresh jobs</p>
              <h6 class="card-text text-center">
                {" "}
                No Download Resume Attach file
              </h6>
              <p class="card-text text-center"> Job displayed for 35 days</p>
              <p class="card-text text-center"> Featured Company</p>
              <div class="  mx-auto">
                <Link to="/payment">
                  {" "}
                  <button
                    onClick={packagesHandler}
                    style={{
                      width: "100%",
                      border: "none",
                      background: "blue",
                      color: "white",
                      font: "bold",
                      borderRadius: "20px",
                    }}
                  >
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
