import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/Home/HomePage'
import Donation from '../Pages/Donation/Donation'
import Statistics from '../Pages/Statistics/Statistics'
import SingleDonation from '../components/SingleDonation/SingleDonation'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/donation',
        element: <Donation />,
      },
      {
        path: '/donation/:id',
        element: <SingleDonation />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
    ],
  },
])

export default Route
