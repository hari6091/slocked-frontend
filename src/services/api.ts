import axios from 'axios';

const json = localStorage.getItem('u');
const user = JSON.parse(json as string);

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: user?.token,
  },
});

export default api;
