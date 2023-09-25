import { useLoaderData, useParams } from 'react-router-dom'
import { saveDonationData } from '../../utils/localStorage'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'
import SingleDonationDetails from '../SingleDonationDetails/SingleDonationDetails'

const SingleDonation = () => {
  const [singleDonation, setSingleDonation] = useState({})

  const data = useLoaderData()
  const { id } = useParams()

  useEffect(() => {
    const findDonation = data?.find((donation) => donation.id === id)
    setSingleDonation(findDonation)
  }, [id, data])

  const handleDonation = () => {
    saveDonationData(id)
    toast.success(`You Have Successfully Donated`)
  }

  return (
    <div className='container p-8 mx-auto lg:py-12'>
      <SingleDonationDetails
        donation={singleDonation}
        handleDonation={handleDonation}
      />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}
export default SingleDonation
