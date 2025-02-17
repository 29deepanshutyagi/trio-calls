const axios = require('axios');

const loginAndCreateMeet = async () => {
  try {
    // Step 1: Login
    const loginResponse = await axios.post('http://localhost:4000/login', {
      email: "arunsng18@gmail.com",
      password: "your_password_here"
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const token = loginResponse.data.token;

    // Step 2: Create a meet and invite other users
    const createMeetResponse = await axios.post('http://localhost:4000/newMeet', {
      title: "Test Meeting",
      invitees: ["deepanshu.2226cs1195@kiet.edu", "53sanjaykumar@gmail.com"],
      hostID: "67b037e0e00cada5e022b4de",
      type: "video",
      time: "1733024800000"
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Meet created successfully:', createMeetResponse.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

loginAndCreateMeet();
