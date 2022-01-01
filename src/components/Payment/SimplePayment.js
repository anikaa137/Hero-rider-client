import React, { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useHistory } from "react-router";
import { AppContext } from "../../App";

const SimplePayment = () => {
  let history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const { loggedInUser, setLoggedInUser } = useContext(AppContext);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);

      const newData = { ...loggedInUser };
      newData.paymentInfo = paymentMethod;
      setLoggedInUser(newData);
      setPaymentSuccess(paymentMethod.id);

      if (paymentMethod.id) {
        fetch(`https://shielded-mesa-68080.herokuapp.com/employPaymet`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loggedInUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data) {
              alert("Your paymet Placed Successfully");
              history.push(`/Success`);
            }
          });
      } else {
        alert("Ahhh aaawww! Sometging happend wrong.");
      }
    }
  };
  console.log(loggedInUser);

  return (
    <div>
      <form className="w-50 my-5 mx-3" onSubmit={handleSubmit}>
        <CardElement />
        <br />
        <button className="btn btn-info" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <p className="text-danger">{paymentError}</p>}
      {paymentSuccess && (
        <p className="text-success">Your Payment was successful</p>
      )}
    </div>
  );
};

export default SimplePayment;
