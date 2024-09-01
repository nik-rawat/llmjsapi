const express = require('express');
const serverless = require('serverless-http'); 
const app = express();

app.use(express.json());

app.post('/api/extract_intent_entities', (req, res) => {
  const response = {
    "intent": "send",
    "entities": {
      "amount": "0.5",
      "currency": "ETH",
      "destination_address": "0x1a2B3c4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9STU"
    }
  };
  res.json(response);
});

module.exports = app;
module.exports.handler = serverless(app);
