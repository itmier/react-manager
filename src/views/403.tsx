/*
 * @Author: Tmier
 * @Date: 2023-12-07 22:49:53
 * @LastEditTime: 2023-12-07 23:08:05
 * @LastEditors: Tmier
 * @Description:
 *
 */
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
const Page_403: React.FC = () => {
  const navigate = useNavigate()
  const goIndex = () => {
    navigate('/')
  }
  return (
    <Result
      status={403}
      title='403'
      subTitle='Sorry, you are not authorized to access this page.'
      extra={
        <Button type='primary' onClick={goIndex}>
          返回首页
        </Button>
      }
    />
  )
}

export default Page_403
