import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.24.0.3:5000',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

export default api;
