
// import axios from 'axios';

// export const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
// });

// api.interceptors.request.use((config) => {
//     const userData = localStorage.getItem('devburger:userData');

//     if (userData) {
//         const parsedData = JSON.parse(userData);
//         if (parsedData.token) {
//             config.headers.Authorization = `Bearer ${parsedData.token}`;
//         }
//     }

//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

// src/services/api.js
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const raw = localStorage.getItem('devburger:userData');
  const parsed = raw && JSON.parse(raw);

  if (parsed?.token) {
    config.headers.Authorization = `Bearer ${parsed.token}`;
  }
  return config;
});
