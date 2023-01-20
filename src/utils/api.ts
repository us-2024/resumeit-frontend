import axios from 'axios'

let urls = {
    test: `http://localhost:3000`,
    development: `http://localhost:3000`,
    production: `https://resumeit.onrender.app`,
}

export const api = axios.create({
    baseURL: `https://resumeit.onrender.app`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})
