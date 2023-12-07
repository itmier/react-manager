/*
 * @Author: Tmier
 * @Date: 2023-08-30 22:48:30
 * @LastEditTime: 2023-12-07 22:37:31
 * @LastEditors: Tmier
 * @Description:
 *
 */
import './App.css'
import router from './router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return <RouterProvider router={router} />
}

export default App
