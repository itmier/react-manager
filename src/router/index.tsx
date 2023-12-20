/*
 * @Author: Tmier
 * @Date: 2023-12-07 22:32:07
 * @LastEditTime: 2023-12-20 20:42:52
 * @LastEditors: Tmier
 * @Description:
 *
 */
import { Navigate, createBrowserRouter, useRoutes } from 'react-router-dom'
import Login from '@/views/Login'
import Page_403 from '@/views/403'
import Page_404 from '@/views/404'
import Dashboard from '@/views/Dashboard'
const routes = [
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/404',
    element: <Page_404 />
  },
  {
    path: '/403',
    element: <Page_403 />
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />
  }
]
// export default createBrowserRouter(routes)

export default function Router() {
  return useRoutes(routes)
}
