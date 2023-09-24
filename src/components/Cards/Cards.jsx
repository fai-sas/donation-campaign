import { useEffect, useState } from 'react'
import Card from './Card'

const Cards = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('donations.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, [])

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {cards.map((card) => {
        return <Card key={card.id} card={card}></Card>
      })}
    </div>
  )
}
export default Cards
