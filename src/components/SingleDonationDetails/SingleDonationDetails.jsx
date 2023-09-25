/* eslint-disable react/prop-types */
const SingleDonationDetails = ({ donation, handleDonation }) => {
  const { picture, text_color, price, title, description } = donation

  return (
    <div>
      <div className='relative'>
        <img src={picture} className='object-cover w-full rounded-lg ' alt='' />
        <div className='absolute bottom-0 left-0 w-full p-4 lg:p-8  bg-[#0b0b0b7f] '>
          <button
            onClick={handleDonation}
            className='text-xl font-semibold text-white border-none opacity-100 btn'
            style={{
              backgroundColor: text_color,
            }}
          >
            Donate ${price}
          </button>
        </div>
      </div>

      <article className='py-8'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-4 text-[#0b0b0bb2] leading-7'>{description}</p>
      </article>
    </div>
  )
}
export default SingleDonationDetails
