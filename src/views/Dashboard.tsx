/*
 * @Author: Tmier
 * @Date: 2023-12-07 22:51:14
 * @LastEditTime: 2023-12-21 21:56:34
 * @LastEditors: Tmier
 * @Description:
 *
 */
import request from '@/utils/request'
import { Button } from 'antd'

const Dashboard: React.FC = () => {
  const handleClick = () => {
    request.get('/users/login', {})
  }
  return (
    <>
      <div>Dashboard</div>
      <Button onClick={handleClick}>Click Me</Button>
    </>
  )
}

export default Dashboard
