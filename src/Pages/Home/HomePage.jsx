import { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Cards from '../../components/Cards/Cards'

const HomePage = () => {
  const [searchCategory, setSearchCategory] = useState('')

  const handleSearch = (category) => {
    setSearchCategory(category)
  }

  return (
    <div className='pb-8'>
      <Banner handleSearch={handleSearch} />
      <Cards searchCategory={searchCategory} />
    </div>
  )
}

export default HomePage
