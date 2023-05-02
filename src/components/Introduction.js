import React from 'react'
import { Link } from 'react-router-dom'
import mainImage from '../assets/images/undraw_programming.svg'
import { FaArrowAltCircleDown } from 'react-icons/fa'

const Introduction = () => {
    return (
        <div className='flex flex-col md:items-center md:justify-between md:flex-row transition-all duration-500 '>
            <div className='w-full md:w-1/3 mx-auto md:mx-0'>
                <h1 className='font-semibold text-2xl md:text-3xl uppercase text-center md:text-left'>HI, IAM JIREH TUZOLANA TUTONDELE </h1>
                <p className='font-medium text-lg md:text-2xl text-center md:text-left text-gray-500'>A Node Js and Salesforce Developer</p>
                <div className='text-center md:text-left'>
                    <button className='border border-blue-300 rounded p-5 mt-10 bg-indigo-50 hover:bg-indigo-400'>
                        <Link to="#" className='flex items-center justify-between gap-3'>
                            <FaArrowAltCircleDown />
                            <p>Download CV</p>
                        </Link>
                    </button>
                </div>
            </div>
            <span className='w-full md:w-2/3 mt-20 md:mt-0'>
                <img src={mainImage} className='md:w-full' alt="main-image" />
            </span>
        </div>
    )
}

export default Introduction
