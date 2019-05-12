
import axios from 'axios';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

const url = `${process.env.REACT_APP_API_URL}/formEmail`;

export const submitEmail = (data) => {
    return axios.post(url, data, headers);
};