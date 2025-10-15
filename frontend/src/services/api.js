// src/services/api.js
import axios from 'axios';
import { useAuth } from '@/stores/auth';

axios.defaults.baseURL = process.env.VUE_APP_API_URL ? (process.env.VUE_APP_API_URL + '/api') : '/api';

const api = axios.create();

// Attach token from reactive store on each request so it's always current
api.interceptors.request.use((config) => {
  try {
    const { state } = useAuth();
    if (state.token) {
      config.headers.Authorization = `Bearer ${state.token}`;
    }
  } catch (e) { /* ignore */ }
  return config;
}, (err) => Promise.reject(err));

export default api;

