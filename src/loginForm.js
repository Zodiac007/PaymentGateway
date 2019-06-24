import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./Css/loginForm.css";
import { Link } from "react-router-dom";
export default class LoginForm extends React.Component {
  render() {
    return (
      <Form className="form">
        <h2 className="heading">Sign In Here</h2>
        <FormGroup>
          <Label for="exampleEmail" className="label">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter your Email"
            className="input"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className="label">
            Invoice Number
          </Label>
          <Input
            type="number"
            name="invoicenumber"
            id="exampleInvoiceNumber"
            placeholder="Enter your invoice number"
            className="input"
          />
        </FormGroup>

        <Link
          to="/paymentForm"
          className="submit"
          style={{ cursor: "pointer" }}
        >
          Submit
        </Link>
      </Form>
    );
  }
}
