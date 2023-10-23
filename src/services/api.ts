import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend:5000',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

export default api;
