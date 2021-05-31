import constants from '../constant.json'
import axios from 'axios'

export default function APIGetKeys(token) {
  return axios.get(constants.baseAddress +'key', {
    headers: {
      'Authorization': `token ${token}`
    }
  })
  .then((res) => res.data)
  .catch((error) => {
    console.error(error)
  })
}