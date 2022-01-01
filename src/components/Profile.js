import React from "react";

const Profile = () => {
  // get user info from local-storage
  const userInfo = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className="container  px-5 mt-5 pt-4 mb-5">
      <div className="row g-5">
        <div className="col-md-5 ">
          <div class="card">
            <img
              style={{ height: "10%" }}
              src="https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title"> My Profile</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Full Name: {userInfo?.name}</li>
              <li class="list-group-item">Email: {userInfo?.email}</li>
              <li class="list-group-item">phone: {userInfo?.phone}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-7  ">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">Car Information</h5>
              <hr />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  {" "}
                  Care Name: {userInfo?.careName}
                </li>
                <li class="list-group-item">
                  {" "}
                  Name Plate: {userInfo?.namePalate}
                </li>
                <li class="list-group-item"> Modal: {userInfo?.carModel}</li>
              </ul>
            </div>
          </div>

          <div class="card mt-5">
            <div class="card-body">
              <h5 class="card-title text-center">Addition Info</h5>
              <hr />
              <ul class="list-group list-group-flush">
                <li class="list-group-item"> Age: {userInfo?.age}</li>
                <li class="list-group-item"> Address: {userInfo?.address}</li>
                <li class="list-group-item"> Area: {userInfo?.area}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
