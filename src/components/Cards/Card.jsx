const Card = ({ card }) => {
  const { picture, category, title, card_bg, category_bg, text_color } = card

  return (
    <div
      className='shadow-xl card card-compact'
      style={{ backgroundColor: category_bg, color: text_color }}
    >
      <img src={picture} alt={title} />

      <div className='card-body'>
        <p className='text-sm' style={{ backgroundColor: card_bg }}>
          {category}
        </p>
        <p className='text-xl font-semibold'>{title}</p>
      </div>
    </div>
  )
}
export default Card
