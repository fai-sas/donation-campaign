import { useLoaderData, useParams } from 'react-router-dom'
import { saveDonationData } from '../../utils/localStorage'

const SingleDonation = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const donation = data.find((donation) => donation.id === id)

  const handleDonation = () => {
    saveDonationData(id)
    alert('You have applied successfully')
  }

  return (
    <div className='py-12'>
      <div>
        <img src={donation.picture} className='object-cover w-full ' alt='' />
        <button onClick={handleDonation} className='btn btn-primary'>
          {donation.price}
        </button>
        <article className='py-8'>
          <h1 className='text-4xl font-bold'>{donation.title}</h1>
          <p className='py-4 text-[#0b0b0bb2] leading-7'>
            {donation.description}
          </p>
        </article>
      </div>
    </div>
  )
}
export default SingleDonation
