import axios from 'axios'

const Api = axios.create({baseURL: 'https://reqres.in/api'})
Api.interceptors.request.use(
    async config => {
        config.params = {...config.params}
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        config.headers = headers;
        return config;
    },
    error => {
        return Promise.reject(error)
    }
);

export default Api;