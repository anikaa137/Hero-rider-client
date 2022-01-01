import React from "react";

const AllUserTable = ({
  allUser,
  gotoPrevious,
  pages,
  setpageNumber,
  gotoNext,
  search,
}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">role</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((user, index) => (
            <tr key={user.id}>
              {/* <td>{index + 1}</td> */}
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button onClick={gotoPrevious} className="page-link">
              {" "}
              Previous{" "}
            </button>
          </li>

          {pages.map((pageIndex) => (
            <li className="page-item" key={pageIndex}>
              <button
                className="page-link"
                onClick={() => setpageNumber(pageIndex)}
              >
                {pageIndex + 1}
              </button>
            </li>
          ))}

          <li className="page-item">
            <button onClick={gotoNext} className="page-link">
              {" "}
              Next{" "}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AllUserTable;
