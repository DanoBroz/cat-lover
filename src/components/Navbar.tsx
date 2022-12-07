import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const linkClass =
    'rounded-lg py-[10px] px-6 text-lg transition-colors text-center'
  const activeClass = `${linkClass} bg-Blue-400 text-Blue-50 hover:bg-Blue-400/80`
  const inactiveClass = `${linkClass} bg-Blue-100 text-Blue-400 hover:bg-Blue-400/80 hover:text-Blue-50`

  return (
    <nav className='mx-8 mb-8 grid grid-cols-[repeat(3,_minmax(auto,_192px))] justify-center gap-4 rounded-xl bg-Blue-100/50 py-2'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        random pictures
      </NavLink>
      <NavLink
        to='/breed'
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        cat breeds
      </NavLink>
      <NavLink
        to='/favorite'
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        my favorite
      </NavLink>
    </nav>
  )
}
