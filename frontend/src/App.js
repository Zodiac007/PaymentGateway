import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import "./index.css";

export default function App() {
  const [product, setProduct] = useState({
    name: "Student Fee",
    price: 20,
    RecievedBy: "Harsh",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Simple Payment Gateway</h1>
      <StripeCheckout
        className="stripeCheckout"
        stripeKey="pk_test_zgYbeVKDogsRsl7Ocxm3tjjZ00h6wiLonZ"
        token={makePayment}
        name="Student Fees"
      >
        <button className="waves-effect waves-light btn-large">
          <i className="large material-icons right">account_balance_wallet</i>
          Pay {product.price} $ with React Checkout
        </button>
      </StripeCheckout>
    </>
  );
}
