import request from '@/utils/request'

// 获取错误信息列表
export function getDataLog(query) {
  return request({
    url: '/log/getDataLog',
    method: 'get',
    params: query
  })
}
