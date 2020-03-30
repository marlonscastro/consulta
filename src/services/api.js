import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/bopmpe/api'
});

export default api;