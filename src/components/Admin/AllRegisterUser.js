import React, { useState, useEffect } from "react";

import AllUserTable from "./AllUserTable";

const AllRegisterUser = () => {
  const [search, setSearch] = useState("");

  const [allUser, setAllUser] = useState([]);

  const [pageNumber, setpageNumber] = useState([]);
  const [numberOfPages, setnumberOfPages] = useState([]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

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

  function searchh(rows) {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().indexOf(search) > -1 ||
        row.email.toLowerCase().indexOf(search) > -1
    );
  }

  return (
    <div className="container text-center">
      <div className="mt-5 pt-5  mx-5" style={{ width: "300px" }}>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <h4>Page of {pageNumber + 1} </h4>

      <AllUserTable
        allUser={searchh(allUser)}
        gotoPrevious={gotoPrevious}
        pages={pages}
        setpageNumber={setpageNumber}
        gotoNext={gotoNext}
        // search={search}
      />
    </div>
  );
};

export default AllRegisterUser;
