
import axios from 'axios';

class Email {

    constructor () {
        this.submit = this.submit.bind(this);
    }
    
    submit (data) {

        let headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        let url = `http://localhost:3000/formEmail`;

        return  axios.post(url, data, headers);
    }
}


export default Email;
