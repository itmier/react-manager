/*
 * @Author: Tmier
 * @Date: 2023-12-07 22:47:36
 * @LastEditTime: 2023-12-20 21:40:48
 * @LastEditors: Tmier
 * @Description:
 *
 */
import { ShowLoading } from '@/utils/loading'
import { useEffect } from 'react'

const Login: React.FC = () => {
  useEffect(() => {
    ShowLoading()
  }, [])
  return <div>Login</div>
}

export default Login
