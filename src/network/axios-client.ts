// src/api/axiosClient.ts
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://poll.lazyy.fr/api',
  timeout: 10000,
});

// Intercepteur réponses : gestion erreurs globales
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // ex : logout
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
