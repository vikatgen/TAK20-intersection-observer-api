import axios from 'axios';

const API = axios.create({
    baseURL: "",
    headers: {}
})

export default API;