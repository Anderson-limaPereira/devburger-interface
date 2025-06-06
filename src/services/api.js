
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://devburger-api-fvyv.onrender.com', /*import.meta.env.VITE_API_URL,*/ 
});


api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('devburger:userData');

    if (userData) {
        const parsedData = JSON.parse(userData);
        if (parsedData.token) {
            config.headers.Authorization = `Bearer ${parsedData.token}`;
        }
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});
