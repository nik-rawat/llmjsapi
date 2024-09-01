const axios = require('axios');

const sendRequest = async () => {
  try {
    const response = await axios.get('https://your-app-name.vercel.app/api/extract_intent_entities');

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

// Run the request function
sendRequest();
