import constants from '../constant.json'
import axios from 'axios'
export default function APIRefreshToken(rToken) {
    return axios.post(constants.baseAddress+'/login', {
        "token" : rToken
    })
    .then(response => response.data)
    .catch(error => 
        error.response.status
    );
    
}