import constants from '../constant.json'
import axios from 'axios'

export default function APIGetAllUsers() {
  const token = localStorage.getItem('token')
  return axios.get(constants.baseAddress +'user', {
    headers: {
      'Authorization': `token ${token}`
    }
  })
  .then((res) => res.data)
  .catch((error) => {
    console.error(error)
  })
}