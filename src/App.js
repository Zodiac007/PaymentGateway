import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { StripeProvider, Elements } from "react-stripe-elements";
import LoginForm from "./loginForm";
import PaymentForm from "./paymentForm";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/paymentForm" component={PaymentForm} />
        <StripeProvider apiKey="pk_live_X70WTTufSgESHoOFxC4usSVO007kt3IEp5">
          <Elements className="background">
            <Route exact path="/" component={LoginForm} />
          </Elements>
        </StripeProvider>
      </BrowserRouter>
    );
  }
}

// interface IAppProps {}

// interface IAppState {}
