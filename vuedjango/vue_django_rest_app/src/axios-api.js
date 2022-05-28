import axios from 'axios'

const getApi = axios.create({
    baseURL:'http://127.0.0.1:8000',
    timeout:'1000',//each send request server 1000 seconds one
})

export const apiUrlListAxios = {
    getApi
}