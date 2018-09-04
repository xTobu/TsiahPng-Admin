import request from '@/utils/request'
import qs from 'qs'
export function login (username, password) {
  return request({
    url: '/auth/login',
    method: 'post',
    data: qs.stringify({
      username: username,
      password: password
    })
  })
}
