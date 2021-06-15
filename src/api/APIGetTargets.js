import constants from '../constant.json'
import axios from 'axios'

export default function APIGetTargets(token) {
  return axios.get(constants.baseAddress +'target', {
    headers: {
      'Authorization': `token ${token}`
    }
  })
  .then((res) => res.data)
  .catch((error) => {
    console.error(error)
  })
}