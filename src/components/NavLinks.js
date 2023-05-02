import React from 'react'
import { NavLink } from 'react-router-dom'
import { Links } from '../utils'

const NavLinks = ({ isSmallMenuOpen }) => {
    return (
        <ul className={
            isSmallMenuOpen ?
                'md:flex md:items-center md:z-auto absolute w-full border-b-2 shadow-md left-0 md:w-auto md:py-0 py-3 md:pl-0 pl-3  transition-all ease-in duration-500'
                :
                'md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 opacity-0 md:opacity-100 top-[-400px] transition-all ease-in duration-500'}
        >
            {
                Links.map((link) => (
                    <div className='border-b border-gray-100 md:border-none'>
                        <li key={link.name} className='mx-4 my-5 md:my-0'><NavLink to={link.to} className='text-xl font-medium' >
                            {link.name}
                        </NavLink>
                        </li>
                    </div>
                ))
            }
            <button className='bg-indigo-500 text-xl mt-5 text-white duration-500 px-6 py-2 mx-4 md:my-0 hover:bg-indigo-600 rounded font-medium'>
                Hire Me</button>
        </ul>
    )
}

export default NavLinks
//top-[80px]