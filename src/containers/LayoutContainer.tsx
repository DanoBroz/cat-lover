import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'

export const LayoutContainer = () => {
  return (
    <div className='container relative mt-9 mb-9 rounded-lg bg-Blue-50/70 px-44 py-12'>
      <Navbar />
      <Outlet />
    </div>
  )
}
