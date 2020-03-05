import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
