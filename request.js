const axios = require('axios');

const sendRequest = async () => {
  try {
    const response = await axios.post('https://llmjsapi-d1anands-projects.vercel.app/api/llmresponseapi', {
      text: "Any input text here."
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

sendRequest();
