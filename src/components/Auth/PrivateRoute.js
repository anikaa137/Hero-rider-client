import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AppContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const { loggedInUser } = useContext(AppContext);
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
