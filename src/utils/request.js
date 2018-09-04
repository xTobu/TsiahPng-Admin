import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: 'http://localhost:8080' // api的base_url
  // timeout: 15000
})

// request 攔截
service.interceptors.request.use(
  config => {
    // if (store.getters['auth/getToken']) {
    // config.headers['Authorization'] = 'Bearer ' + getToken()
    // }
    if (getToken() !== '') {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respones 攔截
service.interceptors.response.use(
  response => {
    // if (response.status !== 200) {
    //   return Promise.reject(new Error('error'))
    // }
    return response.data
  },
  error => {
    // console.log('err' + error) // for debug
    alert('err' + error)

    return Promise.reject(error)
  }
)

export default service
