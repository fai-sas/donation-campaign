import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Donations = ({ data }) => {
  const {
    id,
    picture,
    category,
    title,
    price,
    category_bg,
    text_color,
    card_bg,
  } = data

  return (
    <div
      className='items-center gap-8 rounded-lg lg:flex '
      style={{ backgroundColor: category_bg, color: text_color }}
    >
      <img
        src={picture}
        className='object-cover lg:h[12.5rem] lg:w-[18rem] rounded-t-lg lg:rounded-l-lg shadow-2xl '
      />
      <div className='p-2 space-y-2 lg:p-0'>
        <h1
          style={{ backgroundColor: card_bg }}
          className='px-2 py-1 font-medium rounded-md w-max '
        >
          {category}
        </h1>
        <p className=' text-2xl font-semibold text-[#0B0B0B]'>{title}</p>
        <p className='font-semibold'>${price}</p>
        <Link to={`/donation/${id}`}>
          <button
            className='text-lg text-white capitalize btn'
            style={{ backgroundColor: text_color }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Donations
