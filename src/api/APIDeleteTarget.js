import constants from '../constant.json'
import axios from 'axios'

export default function APIDeleteTarget(id) {
    const TOKEN = localStorage.getItem('token')
    return axios.delete(constants.baseAddress + 'target/' + id, {
            headers: {
                'Authorization': `token ${TOKEN}`
            }
        })
        .then((res) => res.data)
        .catch((error) => {
            console.error(error)
        })
}