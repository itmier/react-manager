/*
 * @Author: Tmier
 * @Date: 2023-12-20 21:35:32
 * @LastEditTime: 2023-12-21 22:00:02
 * @LastEditors: Tmier
 * @Description:
 *
 */
import ReactDOM from 'react-dom/client'
import Loading from './loading'
import './loading.less'
let count = 0
// export const ShowLoading = () => {
//   if (count === 0) {
//     const loading = document.createElement('div')
//     loading.setAttribute('id', 'loading')
//     document.body.appendChild(loading)
//     ReactDOM.createRoot(loading).render(<Loading />)
//   }
//   count++
// }

// export const HideLoading = () => {
//   if (count < 0) return
//   count--
//   if (count === 0) {
//     const loading = document.getElementById('loading')
//     if (loading) {
//       document.body.removeChild(loading)
//     }
//   }
// }
export const ShowLoading = () => {
  if (count === 0) {
    const loading = document.getElementById('loading')
    loading?.setAttribute('style', 'display:flex')
  }
  count++
}
export const HideLoading = () => {
  count--
  if (count === 0) {
    const loading = document.getElementById('loading')
    loading?.setAttribute('style', 'display:none')
  }
}
