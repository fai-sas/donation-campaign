import { useLoaderData, useParams } from 'react-router-dom'
import { saveDonationData } from '../../utils/localStorage'

const SingleDonation = () => {
  const data = useLoaderData()
  console.log(data)
  // console.log(data[0].category_bg)
  const { id, category_bg, text_color } = useParams()
  const donation = data.find((donation) => donation.id === id)

  const handleDonation = () => {
    saveDonationData(id)
    alert('You have applied successfully')
  }

  return (
    <div className='container py-12 mx-auto'>
      <div>
        <img src={donation.picture} className='object-cover w-full ' alt='' />
        <button
          onClick={handleDonation}
          className='btn'
          // style={{ backgroundColor: category_bg, color: text_color }}
        >
          Donate ${donation.price}
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
