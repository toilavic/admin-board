import constants from '../constant.json'
import axios from 'axios'
export default function APICreateKey(name, owner, expire) {

    const token = localStorage.getItem('token')

    var keyRequiredInfo = {
        "name": name,
        "owner": owner,
        "expiresAt": expire
    }

    var config = {
        method: 'post',
        headers: {
            'Authorization': `token ${token}`
        },
        url: constants.baseAddress + 'key',
        data: keyRequiredInfo
    };

    return axios(config)
        .then(response => response)
        .catch(function (error) {
            if (error.response) {
                return error.response;
                // console.log(error.response.status);
                // console.log(error.response.headers);
            }
        })
}
