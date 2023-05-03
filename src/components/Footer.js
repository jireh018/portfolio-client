import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagramSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='mt-20 container pt-5 m-auto grid grid-rows-3 place-items-center'>
            <div>
                <h3 className="text-3xl mb-8 text-black">
                    Follow Me
                </h3>
            </div>
            <div className='flex gap-10'>
                <Link to='https://www.linkedin.com/in/jirehtutondele/'><FaLinkedin size={55} /></Link>
                <Link to='https://github.com/jireh018'><FaGithubSquare size={55} /></Link>
                <Link to='https://www.instagram.com/jirehtutondele'><FaInstagramSquare size={55} /></Link>
            </div>
            <div>
                © 2023 Jireh Tuzolana Tutondele
            </div>
        </div>
    )
}

export default Footer
