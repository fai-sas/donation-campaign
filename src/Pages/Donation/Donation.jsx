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
      <article className='container grid grid-cols-2 gap-8 py-8 py-12 mx-auto'>
        {displayDonation.slice(0, cardLength).map((data) => {
          return <Donations key={data.id} data={data} />
        })}
      </article>
      <div className={cardLength === displayDonation.length ? 'hidden' : ''}>
        <button
          onClick={() => setCardLength(displayDonation.length)}
          className='btn bg-[#009444] hover:bg-[#79C23F] text-white mx-auto block'
        >
          See All
        </button>
      </div>
    </>
  )
}
export default Donation
