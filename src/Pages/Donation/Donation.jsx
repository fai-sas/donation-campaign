import { useLoaderData } from 'react-router-dom'
import { getDonationData } from '../../utils/localStorage'
import { useEffect, useState } from 'react'
import Donations from '../../components/Donations/Donations'

const Donation = () => {
  const donations = useLoaderData()

  const [cardLength, setCardLength] = useState(4)
  const [displayDonation, setDisplayDonation] = useState([])

  useEffect(() => {
    const storedDonationIds = getDonationData()
    if (donations.length > 0) {
      const donationDone = []
      for (const id of storedDonationIds) {
        const donation = donations.find((donation) => donation.id === id)
        if (donation) {
          donationDone.push(donation)
        }
      }

      setDisplayDonation(donationDone)
    }
  }, [donations])

  return (
    <>
      <article className='container grid gap-8 px-8 py-12 mx-auto md:px-0 md:grid-cols-2'>
        {displayDonation.slice(0, cardLength).map((data) => {
          return <Donations key={data.id} data={data} />
        })}
      </article>
      {cardLength < displayDonation.length && (
        <div className='text-center'>
          <button
            onClick={() => setCardLength(displayDonation.length)}
            className='btn bg-[#009444] hover:bg-[#79C23F] text-white mx-auto block'
          >
            See All
          </button>
        </div>
      )}
    </>
  )
}
export default Donation
