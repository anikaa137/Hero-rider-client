import React, { useState, useEffect } from "react";
import { allRegister } from "../../action/allRegisterUser";

const AllRegisterUser = () => {
  const [allUser, setAllUser] = useState([]);
  const [pageNumber, setpageNumber] = useState([]);
  const [numberOfPages, setnumberOfPages] = useState([]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  // console.log("all", allUser);
  // useEffect(() => {
  //   loadAllUser();
  // }, []);

  // const loadAllUser = async () => {
  //   let res = await allRegister();
  //   setAllUser(res.data);
  // };

  useEffect(() => {
    fetch(`http://localhost:8000/api/all-register-user?page=${pageNumber}`)
      .then((res) => res.json())
      .then(({ totalPages, all, total }) => {
        setAllUser(all);
        setnumberOfPages(totalPages);
      });
  }, [pageNumber]);

  const gotoPrevious = () => {
    setpageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setpageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  return (
    <div className="container text-center">
      <h4>Page of {pageNumber + 1} </h4>
      {allUser.map((user) => (
        <div key={user._id} className="user">
          <h2>{user.name}</h2>
        </div>
      ))}

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button onClick={gotoPrevious} class="page-link">
              {" "}
              Previous{" "}
            </button>
          </li>

          {pages.map((pageIndex) => (
            <li class="page-item">
              <button
                class="page-link"
                key={pageIndex}
                onClick={() => setpageNumber(pageIndex)}
              >
                {pageIndex + 1}
              </button>
            </li>
            // <button key={pageIndex} onClick={() => setpageNumber(pageIndex)}>
            //   {pageIndex + 1}
            // </button>
          ))}

          <li class="page-item">
            <button onClick={gotoNext} class="page-link">
              {" "}
              Next{" "}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AllRegisterUser;
