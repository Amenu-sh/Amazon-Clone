const secretKey = process.env.REACT_APP_AMAZON_SECRET_KEY;

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")({ secretKey });

//..App config
const app = express();
//..Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  // request.socket.setTimeout(3000);
  const total = req.query.total;

  console.log("Payment Request Recieved BOOM!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  //..ok created
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

//..Listen command
exports.api = functions.https.onRequest(app);
