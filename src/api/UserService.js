import axios from './customize-axios'


const loginApi = (email, password) => {
  return axios.post('/api/login', { email, password })
}


export { loginApi }
