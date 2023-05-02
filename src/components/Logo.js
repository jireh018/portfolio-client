import React from 'react'
import logo from '../assets/images/favicon.ico'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to="/" className="flex items-center pl-2">
            <img src={logo} className="h-12 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Jireh</span>
        </Link>
    )
}

export default Logo
