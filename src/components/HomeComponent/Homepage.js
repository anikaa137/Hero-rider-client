import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Link to="/welcome">
        <div class="position-absolute top-50 start-50">
          <button> Get Start </button>
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
