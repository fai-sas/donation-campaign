import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/Home/HomePage'
import Donation from '../Pages/Donation/Donation'
import Statistics from '../Pages/Statistics/Statistics'
import SingleDonation from '../components/SingleDonation/SingleDonation'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/donation',
        element: <Donation />,
        loader: () => fetch('/donations.json'),
      },
      {
        path: '/donation/:id',
        element: <SingleDonation />,
        loader: () => fetch('/donations.json'),
      },
      {
        path: '/statistics',
        element: <Statistics />,
        loader: () => fetch('/donations.json'),
      },
    ],
  },
])

export default Route
