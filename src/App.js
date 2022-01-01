import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRegisterUser from "./components/Admin/AllRegisterUser";
import LearnerRegistr from "./components/Auth/LearnerRegistr";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Register from "./components/Auth/RiderRegister";
import Homepage from "./components/HomeComponent/Homepage";
import TopNav from "./components/HomeComponent/TopNav";
import WelcolmePage from "./components/HomeComponent/WelcolmePage";
import Packages from "./components/Packages";
import Payment from "./components/Payment/Payment";
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import Profile from "./components/Profile";

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
          <Route path="/learner-register">
            <LearnerRegistr />
          </Route>
          <Route path="/dashboard">
            <AllRegisterUser />
          </Route>
          <Route path="/welcome">
            <WelcolmePage />
          </Route>
          <Route path="/packages">
            <Packages />
          </Route>
          <PrivateRoute path="/payment">
            <Payment />
          </PrivateRoute>
          <Route path="/Success">
            <PaymentSuccess />
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
