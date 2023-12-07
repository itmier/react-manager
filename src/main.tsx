/*
 * @Author: Tmier
 * @Date: 2023-08-30 22:48:30
 * @LastEditTime: 2023-12-07 22:25:29
 * @LastEditors: Tmier
 * @Description:
 *
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BaseRouter from './aaa.tsx'
const ReactLearnTest = () => {
  return <h2>Go</h2>
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/reactLearnTest' element={<ReactLearnTest />} />
    </Routes>
    <BaseRouter />
  </BrowserRouter>
)
