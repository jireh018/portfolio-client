import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='mt-20 container pt-5 m-auto grid grid-rows-3 place-items-center'>
            <div>
                <h3 className="text-3xl mb-8 text-black">
                    Follow Me
                </h3>
            </div>
            <div className='flex gap-10'>
                <FaFacebookSquare size={55} />
                <FaGithubSquare size={55} />
                <FaLinkedin size={55} />
                <FaTwitterSquare size={55} />
            </div>
            <div>
                © 2023 Jireh Tuzolana Tutondele
            </div>
        </div>
    )
}

export default Footer
