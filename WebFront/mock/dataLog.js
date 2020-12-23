const Mock = require('mockjs')
 
const List = []
 
const count = 10
 
// 模拟错误信息
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    data: '12987122',
    time: '好滋好味鸡蛋仔',
    log: '江浙小吃、小吃零食江浙小吃、小吃零食'
  }))
}
 
module.exports = [{
    url: '/log/getDataLog',
    type: 'get',
    response: config => {
      const { data, time, log, page = 1, limit = 20 } = config.query

      return {
        total: List.length,
        items: List,
        limit: 10
      }
    }
  }
]