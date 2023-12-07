/*
 * @Author: Tmier
 * @Date: 2023-12-07 22:49:53
 * @LastEditTime: 2023-12-07 23:05:22
 * @LastEditors: Tmier
 * @Description:
 *
 */
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
const Page_404: React.FC = () => {
  const navigate = useNavigate()
  const goIndex = () => {
    navigate('/')
  }
  return (
    <Result
      status={404}
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' onClick={goIndex}>
          返回首页
        </Button>
      }
    />
  )
}

export default Page_404
