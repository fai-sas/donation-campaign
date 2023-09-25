/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const Card = ({ card }) => {
  const { id, picture, category, title, card_bg, category_bg, text_color } =
    card

  return (
    <>
      <Link to={`/donation/${id}`}>
        <div
          className='shadow-xl card card-compact'
          style={{ backgroundColor: category_bg, color: text_color }}
        >
          <img src={picture} alt={title} />

          <div className='card-body'>
            <p
              className='inline-flex text-sm'
              style={{ backgroundColor: card_bg }}
            >
              {category}
            </p>
            <p className='text-xl font-semibold'>{title}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
export default Card
