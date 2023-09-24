import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
  return (
    <div className='container py-8 mx-auto'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
