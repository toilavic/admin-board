import constants from '../constant.json'
import axios from 'axios'
export default function APIGetUserByKey(key) {

    const token = localStorage.getItem('token')

    var requiredInfo = {
        "includeUsers": true,
        "key": key
    }

    var config = {
        method: 'get',
        headers: {
            'Authorization': `token ${token}`
        },
        url: constants.baseAddress + 'key',
        params : requiredInfo
    };

    return axios(config)
        .then(response => response)
        .catch(function (error) {
            if (error.response) {
                return error.response;
            }
        })
}
