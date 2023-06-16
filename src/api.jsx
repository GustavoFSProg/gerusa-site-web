import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'https://gerusa-site-api-juab.vercel.app/'
})

export default api