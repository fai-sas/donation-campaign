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
    <div className='container mx-auto'>
      {displayDonation.length === 0 ? (
        <p className='p-16 text-4xl font-bold text-center '>
          No Donations Given Yet!
        </p>
      ) : (
        <>
          <article className='grid gap-8 px-8 py-12 md:px-0 md:grid-cols-2'>
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
      )}
    </div>
  )
}
export default Donation
