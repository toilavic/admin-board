import constants from '../constant.json'
import axios from 'axios'
export default function APICreateTarget(key, name, url, details) {

    const token = localStorage.getItem('token')

    var keyRequiredInfo = {
            "key": key,
            "name": name,
            "url": url,
            "details": details
    }

    var config = {
        method: 'post',
        headers: {
            'Authorization': `token ${token}`
        },
        url: constants.baseAddress + 'target',
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
