const Banner = () => {
  return (
    <div
      className='min-h-[80vh] hero '
      style={{
        backgroundImage: 'url(https://i.ibb.co/FhqTjZ6/donation.jpg)',
      }}
    >
      <div className='bg-[#fffffff2] hero-overlay'></div>
      <div className='text-center'>
        <div className=''>
          <h1 className='mb-5 text-5xl font-bold text-black'>
            I Grow By Helping People In Need
          </h1>

          <label className='justify-center input-group'>
            <input
              type='text'
              placeholder='Search here....'
              className='input input-bordered'
            />
            <span className='bg-[#FF444A] text-white '>Search</span>
          </label>
        </div>
      </div>
    </div>
  )
}
export default Banner
