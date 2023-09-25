/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Card from './Card'

const Cards = ({ searchCategory }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('donations.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, [])

  const filteredCards = cards.filter((card) =>
    card.category.toLowerCase().includes(searchCategory)
  )

  return (
    <>
      {filteredCards.length === 0 ? (
        <h1 className='container py-8 mx-auto text-4xl font-bold text-center'>
          {' '}
          Sorry! No Result Matched Your Search Criteria
        </h1>
      ) : (
        <div className='container grid gap-8 py-12 mx-auto md:grid-cols-2 lg:grid-cols-4'>
          {filteredCards.map((card) => {
            return <Card key={card.id} card={card}></Card>
          })}
        </div>
      )}
    </>
  )
}
export default Cards
