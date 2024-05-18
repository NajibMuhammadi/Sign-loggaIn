import React from 'react'
import { Link } from 'react-router-dom'

function NavItems() {
  return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><Link to='/' className='nav__link'>Sign Up</Link></li>
                <li className='nav__item'><Link to='/signin' className='nav__link'>Sign In</Link></li>
            </ul>
        </nav>
    )
}

export default NavItems
