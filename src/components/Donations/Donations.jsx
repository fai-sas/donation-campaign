/* eslint-disable react/prop-types */
const Donations = ({ data }) => {
  const { picture, category, title, price, category_bg, text_color, card_bg } =
    data

  return (
    <div
      className='flex items-center gap-8 rounded-lg '
      style={{ backgroundColor: category_bg, color: text_color }}
    >
      <img src={picture} className='max-w-sm rounded-lg shadow-2xl' />
      <div className='space-y-2'>
        <h1
          style={{ backgroundColor: card_bg }}
          className='px-2 py-1 font-medium font-bold rounded-md w-max '
        >
          {category}
        </h1>
        <p className=' text-2xl font-semibold text-[#0B0B0B]'>{title}</p>
        <p className='font-semibold'>${price}</p>
        <button
          className='text-lg text-white capitalize btn'
          style={{ backgroundColor: text_color }}
        >
          View Details
        </button>
      </div>
    </div>
  )
}
export default Donations
