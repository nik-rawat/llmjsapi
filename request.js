const axios = require('axios');

const sendRequest = async () => {
  try {
    const response = await axios.post('http://localhost:8000/extract_intent_entities', {
      text: "Any input text here."
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Run the request function
sendRequest();
