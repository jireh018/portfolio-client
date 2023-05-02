import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import { FaMoon } from 'react-icons/fa'
import NavLinks from './NavLinks'


const NavBar = () => {
    const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false)


    return (

        <nav className={
            isSmallMenuOpen ?
                'bg-white md:flex md:items-center md:justify-between py-5 mb-80 md:mb-0 transition-all duration-500'
                :
                'bg-white md:flex md:items-center md:justify-between py-3 mb-20'
        }
        >
            <div className='flex justify-between items-center'>
                <span className='flex items-center cursor-pointer'>
                    <Logo />
                </span>
                <span className='text-3xl cursor-pointer md:hidden block transition-all duration-500'>
                    <button onClick={() => setIsSmallMenuOpen(!isSmallMenuOpen)}>
                        {
                            isSmallMenuOpen ?
                                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                :
                                <svg class="w-8 h-8 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        }
                    </button>
                </span>
            </div>

            <NavLinks isSmallMenuOpen={isSmallMenuOpen} />
        </nav>

    )
}

export default NavBar

