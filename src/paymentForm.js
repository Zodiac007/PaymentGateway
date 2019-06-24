import React from "react";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import "./Css/loginForm.css";
import { Link } from "react-router-dom";
export default class PaymentForm extends React.Component {
  render() {
    return (
      <Form className="form">
        <h2 className="heading">Make Payment Here</h2>
        <FormGroup>
          <Label for="exampleEmail" className="label">
            Card Number
          </Label>
          <Input
            type="number"
            name="cardNumber"
            id="examplecardNumber"
            placeholder="Enter your card number"
            className="input"
          />
        </FormGroup>

        <Row form>
          <Col md={5}>
            <FormGroup>
              <Label for="exampleEmail" className="label1">
                CVV
              </Label>
              <Input
                type="number"
                name="cvvCode"
                id="examplecvv"
                placeholder="Enter CVV"
                className="input1"
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="examplePassword" className="label1">
                Valid Upto
              </Label>
              <Input
                type="month"
                name="validUpto"
                id="examplevalidupto"
                placeholder="MM/YY"
                className="input1"
              />
            </FormGroup>
          </Col>
        </Row>

        <Link
          to="/paymentForm"
          className="submit"
          style={{ cursor: "pointer", marginTop: "10%" }}
        >
          Submit
        </Link>
      </Form>
    );
  }
}
