import request from '@/utils/request'
import qs from 'qs'

export function getRestaurantsList () {
  return request({
    url: 'api/tsiahpng/RestaurantsList',
    method: 'get'
  })
}

export function postRestaurant (payload) {
  return request({
    url: 'api/tsiahpng/RestaurantAdd',
    method: 'post',
    data: qs.stringify(payload)
  })
}
