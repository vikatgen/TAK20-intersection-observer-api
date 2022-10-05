import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Accept-Version": "v1",
        "Authorization": `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
    }
})

export default API;