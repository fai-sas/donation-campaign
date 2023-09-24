import { useLoaderData, useParams } from 'react-router-dom'

const SingleDonation = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const donation = data.find((donation) => donation.id === id)
  console.log(donation)

  return (
    <div className='py-12'>
      <div>
        <img src={donation.picture} className='object-cover w-full ' alt='' />
        <button className='btn btn-primary'>{donation.price}</button>
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
