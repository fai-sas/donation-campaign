import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container relative z-10 pt-12 pb-8 mx-auto navbar'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/donation'>Donation</NavLink>
            </li>
            <li>
              <NavLink to='/statistics'>Statistics</NavLink>
            </li>
          </ul>
        </div>
        <Link to='/' className='text-xl normal-case '>
          <img src='https://i.ibb.co/rmYtPJp/Logo.png' alt='logo' />
        </Link>
      </div>
      <div className='hidden navbar-end lg:flex'>
        <ul className='px-1 menu-horizontal'>
          <li className='px-4 text-lg font-bold'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='px-4 text-lg font-bold'>
            <NavLink to='/donation'>Donation</NavLink>
          </li>
          <li className='px-4 text-lg font-bold'>
            <NavLink to='/statistics'>Statistics</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
