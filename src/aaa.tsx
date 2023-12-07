/*
 * @Author: Tmier
 * @Date: 2023-12-06 23:30:24
 * @LastEditTime: 2023-12-07 20:31:47
 * @LastEditors: Tmier
 * @Description:
 *
 */
import { useRoutes } from 'react-router-dom'
import React from 'react'
import App from './App'
const ReactLearnTest = () => {
  return <h1>Go</h1>
}
const NotFoundPage = () => {
  return <h1>NotFoundPage</h1>
}

function BaseRouter() {
  const routes = useRoutes([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/test',
      element: <ReactLearnTest />
    },
    {
      path: '/404',
      element: <NotFoundPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])
  return routes
}
export default BaseRouter
