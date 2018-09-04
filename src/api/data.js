import request from '@/utils/request'
import qs from 'qs'

export function getRestaurantsList () {
  return request({
    url: 'api/tsiahpng/RestaurantsList',
    method: 'get'
  })
}
