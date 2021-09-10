import constants from '../constant.json'
import axios from 'axios'
export default function APIUpdateUserTarget(userId, keyId) {

    const token = localStorage.getItem('token')

    var keyRequiredInfo = {
        "keyId": keyId,
    }

    var config = {
        method: 'patch',
        headers: {
            'Authorization': `token ${token}`
        },
        url: constants.baseAddress + 'user/' +userId,
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
