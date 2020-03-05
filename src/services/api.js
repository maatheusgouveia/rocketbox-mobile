import axios from 'axios';

//https://omnistack-backend.herokuapp.com

const api = axios.create({
    baseURL: 'https://omnistack-matheus.herokuapp.com',
})

export default api;