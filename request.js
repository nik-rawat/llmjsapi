const axios = require('axios');

const sendRequest = async () => {
  try {
    const response = await axios.post('https://llmjsapi-d1anands-projects.vercel.app/', {
      text: "Any input text here."
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Run the request function
sendRequest();
