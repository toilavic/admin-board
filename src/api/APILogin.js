import constants from '../constant.json'
import axios from 'axios'
export default function APILogin(userInfo) {
    return axios.post(constants.baseAddress+'login', userInfo)
  .then(response => response)
  .catch(function (error) {
    if (error.response) {
      return error.response;
      // console.log(error.response.status);
      // console.log(error.response.headers);
    }
  })
}