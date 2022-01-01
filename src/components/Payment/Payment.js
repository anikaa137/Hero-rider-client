import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimplePayment from "./SimplePayment";
// import Sidebar from "../Sidebar/Sidebar";

const stripePromise = loadStripe(
  "pk_test_51IdFcaJmKv0M03CV9dEWldax0QhZUPRUr1ehgQS3z1ROT2ZqjtGvrWxy6sEOKBrgubGwoQ4acSj9oMQnmtIKuVxA00WXB3FuMQ"
);

const Payment = () => {
  return (
    <div className="row">
      <div className="col-md-2">{/* <Sidebar /> */}</div>
      <div className="col-md-10">
        <h1 className="text-warning">Please Pay</h1>
        <Elements stripe={stripePromise}>
          <SimplePayment />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
