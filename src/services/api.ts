import axios from 'axios';

const api = axios.create({
    baseURL:'http://172.19.0.1:3333',
});
export {api}
