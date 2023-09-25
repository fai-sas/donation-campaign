import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div
      className='min-h-screen hero'
      style={{
        backgroundImage:
          'url(https://i.ibb.co/tY7Gmmp/Page-not-found-re-e9o6.png)',
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='text-center hero-content text-neutral-content'>
        <div className=''>
          <h1 className='mb-5 text-3xl font-bold'>
            The Page You Are Looking For Does Not Exists
          </h1>
          <Link to='/'>
            <button className='btn btn-primary'>Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ErrorPage
