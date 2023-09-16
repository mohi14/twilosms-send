const express = require("express");
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

app.get("/twilosms", async (req, res) => {
  client.messages
    .create({
      body: "Hi there",
      from: process.env.TWILIO_PHONE_NUMBER,
      to: "+8801975519178",
    })
    .then((message) => console.log(message.sid));
});

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
