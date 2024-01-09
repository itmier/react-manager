/*
 * @Author: Tmier
 * @Date: 2024-01-09 23:01:14
 * @LastEditTime: 2024-01-09 23:07:03
 * @LastEditors: Tmier
 * @Description:
 *
 */
type ENV = 'dev' | 'prd' | 'stg'

const env: ENV = 'dev'

const config = {
  dev: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    cdn: 'http://xxx.aliyun.com',
    mock: 'true',
    mockApi: 'https://www.fastmock.site/mock/xxxxxx/api'
  },
  stg: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-stg.marsview.cc',
    cdn: 'http://xxx.aliyun.com',
    mock: 'false',
    mockApi: 'https://www.fastmock.site/mock/xxxxxx/api'
  },
  prd: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-prd.marsview.cc',
    cdn: 'http://xxx.aliyun.com',
    mock: 'false',
    mockApi: 'https://www.fastmock.site/mock/xxxxxx/api'
  }
}

export default {
  env,
  ...config[env]
}
