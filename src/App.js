import React, { Component } from "react";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "Make Payment",
        // price: 64998.67,
        description: "Make Payment Easy"
      }
    };
  }

  async handleToken(token, product) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="product">
          <h1>{this.state.product.name}</h1>
          {/* <h3>On Sale · ${this.state.product.price}</h3> */}
        </div>
        <StripeCheckout
          stripeKey="pk_test_zgYbeVKDogsRsl7Ocxm3tjjZ00h6wiLonZ"
          token={this.handleToken}
          // amount={this.state.product.price * 100}
          name="Payment Gateway"
          billingAddress
          shippingAddress
        />
      </div>
    );
  }
}
export default App;
