import React from "react";

import { useHistory } from "react-router";

function Welcome() {
  let history = useHistory();

  const riderHandler = () => {
    history.push(`/register`);
    console.log("click");
  };
  const learnerHandler = () => {
    history.push(`/learner-register`);
    console.log("click");
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4 pt-4 mb-5">
        <div className="col">
          <div className="card h-100" onClick={riderHandler}>
            <img
              src="https://image.shutterstock.com/image-vector/slogan-vintage-motorcycle-racer-bike-260nw-1227872266.jpg"
              className="card-img-top"
              alt="..."
              style={{ height: "50%" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center"> Rider</h5>
              <p className="card-text">
                Rider helps you run and debug unit tests based on NUnit,
                xUnit.net, or MSTest. You can explore tests, group them in
                different ways, break them down into ...
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100" onClick={learnerHandler}>
            <img
              src="https://www.reddrivingschool.com/wp-content/uploads/2019/11/woman-swapping-lplate-for-pplate-450x315.jpg"
              className="card-img-top"
              alt="..."
              style={{ height: "50%" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center"> Driver Learners</h5>
              <p className="card-text">
                Learners driving school has some of the best instructors
                specially my instructor Shahu. The instructors at LDS are kind
                and very dedicated to their job. They ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
