import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const getMangoes = () => axios.get(`${API_URL}/mangoes`);
export const placeOrder = (orderData) => axios.post(`${API_URL}/orders`, orderData);
