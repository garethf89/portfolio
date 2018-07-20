
import axios from 'axios';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

const url = `http://localhost:3000/formEmail`;


export const submitEmail = (data) => {
    return axios.post(url, data, headers);
};