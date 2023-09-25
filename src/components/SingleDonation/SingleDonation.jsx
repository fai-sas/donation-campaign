import { useLoaderData, useParams } from 'react-router-dom'
import { saveDonationData } from '../../utils/localStorage'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SingleDonation = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const donation = data.find((donation) => donation.id === id)

  const handleDonation = () => {
    saveDonationData(id)
    toast.success(`You Have Successfully Donated $${donation.price}`)
  }

  return (
    <div className='container py-12 mx-auto'>
      <div className='relative'>
        <img src={donation.picture} className='object-cover w-full ' alt='' />
        <div className='absolute bottom-0 left-0 w-full p-8  bg-[#0b0b0b7f] '>
          <button
            onClick={handleDonation}
            className='text-xl font-semibold text-white border-none opacity-100 btn'
            style={{
              backgroundColor: donation.text_color,
            }}
          >
            Donate ${donation.price}
          </button>
        </div>
      </div>

      <article className='py-8'>
        <h1 className='text-4xl font-bold'>{donation.title}</h1>
        <p className='py-4 text-[#0b0b0bb2] leading-7'>
          {donation.description}
        </p>
      </article>
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
