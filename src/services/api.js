import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.238.83.84/bopmpe/api'
});

export default api;