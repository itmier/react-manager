/*
 * @Author: Tmier
 * @Date: 2023-08-30 22:48:30
 * @LastEditTime: 2023-12-20 20:45:17
 * @LastEditors: Tmier
 * @Description:
 *
 */
import './App.css'
// import router from './router'
import Router from './router'
import { RouterProvider, BrowserRouter } from 'react-router-dom'

// function App() {
//   return <RouterProvider router={router} />
// }
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
