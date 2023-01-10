import axios from 'axios';

const json = localStorage.getItem('u');
const user = json ? JSON.parse(json) : '';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: user.token,
  },
});

export default api;
