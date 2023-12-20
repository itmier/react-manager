/*
 * @Author: Tmier
 * @Date: 2023-12-20 21:35:32
 * @LastEditTime: 2023-12-20 22:16:31
 * @LastEditors: Tmier
 * @Description:
 *
 */
import ReactDOM from 'react-dom/client'
import Loading from './loading'
let count = 0
export const ShowLoading = () => {
  if (count === 0) {
    const loading = document.createElement('div')
    loading.setAttribute('id', 'loading')
    document.body.appendChild(loading)
    // const loading = document.getElementById('loading')
    ReactDOM.createRoot(loading).render(<Loading />)
  }
  count++
}

export const hideLoading = () => {
  // const loading = document.getElementById('loading')
  // if (loading) {
  //   document.body.removeChild(loading)
  //   count = 0
  // }
  if (count < 0) return
  count--
  if (count === 0) {
    const loading = document.getElementById('loading')
    if (loading) {
      document.body.removeChild(loading)
    }
  }
}
