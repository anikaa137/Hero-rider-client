import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRegisterUser from "./components/Admin/AllRegisterUser";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Homepage from "./components/HomeComponent/Homepage";
import TopNav from "./components/HomeComponent/TopNav";

export const AppContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Router>
        <ToastContainer position="top-center" />
        <TopNav />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <AllRegisterUser />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
