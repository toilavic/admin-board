import constants from '../constant.json'
import axios from 'axios'
export default function APIUpdateKey(name, details, url, id) {

    const token = localStorage.getItem('token')

    var keyRequiredInfo = {
        "name": name,
        "details": details,
        "url": url
    }

    var config = {
        method: 'patch',
        headers: {
            'Authorization': `token ${token}`
        },
        url: constants.baseAddress + 'target/' +id,
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
