import axios from 'axios'

// デバッグ用
const END_POINT =
  process.env.NODE_ENV === 'production'
    ? 'https://python-server-api.herokuapp.com/'
    : 'http://0.0.0.0:5000/'

export const req = async (path: string, params: {}) =>
  await axios
    .post(`${END_POINT}/${path}`, params)
    .then(response => response.data)
    .catch(error => console.log(error))
