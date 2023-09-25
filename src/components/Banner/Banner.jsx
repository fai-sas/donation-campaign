/* eslint-disable react/prop-types */
import { useState } from 'react'

const Banner = ({ handleSearch }) => {
  const [search, setSearch] = useState('')

  const handleClick = () => {
    handleSearch(search)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div
      className='min-h-[80vh] hero lg:mt-[-12rem] mt-[-5rem] '
      style={{
        backgroundImage: 'url(https://i.ibb.co/FhqTjZ6/donation.jpg)',
      }}
    >
      <div className='bg-[#fffffff2] hero-overlay'></div>
      <div className='p-4 pt-12 text-center lg:pt-0 lg:p-0'>
        <h1 className='py-8 mb-5 text-3xl font-bold text-black lg:text-5xl'>
          I Grow By Helping People In Need
        </h1>

        <label className='justify-center input-group'>
          <input
            type='text'
            placeholder='Search here....'
            className='input input-bordered lg:w-96'
            value={search}
            onChange={handleChange}
          />
          <span
            onClick={handleClick}
            className='bg-[#FF444A] font-semibold text-white '
          >
            <button>Search</button>
          </span>
        </label>
      </div>
    </div>
  )
}
export default Banner
