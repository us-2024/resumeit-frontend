import axios from 'axios'

let urls = {
    test: `http://localhost:8000`,
    development: `http://localhost:8000`,
    production: `https://resumeit-api.onrender.com`,
}

export const backendApi = axios.create({
    baseURL: `https://resumeit-api.onrender.com`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'user-id': '',
    },
})
