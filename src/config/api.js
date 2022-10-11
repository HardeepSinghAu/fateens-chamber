import axios from 'axios';

// Define an API

const fateenAPI = axios.create({
    baseURL: 'https://fateen-api-production.up.railway.app'
    // baseURL: 'http://localhost:3000'
})

fateenAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;

})

export default fateenAPI;