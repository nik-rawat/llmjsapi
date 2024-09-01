const express = require('express');
const app = express();
const port = 8000;

// Middleware to parse JSON requests
app.use(express.json());

// POST endpoint to extract intent and entities
app.post('/extract_intent_entities', (req, res) => {
    // Hardcoded response
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

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
