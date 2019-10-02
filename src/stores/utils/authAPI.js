import axios from 'axios';

const baseUrl = 'https://bucketlists-app.herokuapp.com'

const authAPI = (type, user) => axios(`${baseUrl}/api/v1/auth/${type}`, {
  method: 'POST',
  data: user,
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
  },
});


export default authAPI;
