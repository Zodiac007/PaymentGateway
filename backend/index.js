const cors = require("cors");
const express = require("express");

const stripe = require("stripe")(
  "sk_test_DuBwQOLcNkeNkbLPgtAO9h6g00xEcISxpT"
);
const { v4: uuidv4 } = require("uuid");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("App is working good !!");
});

// post routes for frontend
app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("Product ", product);
  console.log("Price ", product.price);
  const idempontencyKey = uuidv4(); // for don't pay user multiple times...

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100, //because it is in cents
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchase of Product ${product.name}`,
          shipping: {
            name: token.card.name,
            country: token.card.address_country,
          },
        },
        { idempontencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

// Listen

app.listen(5000, () => console.log("Listing on PORT 5000"));
