import React from 'react'
import { Introduction, Projects } from '../components'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <div className=''>
            <Introduction />
            <Projects />
            <div className='mb-20 flex flex-col items-center'>
                <button className=' w-52 h-14 bg-indigo-500 text-2xl mt-5 text-white duration-500 px-6 py-2 mx-4 md:my-0 hover:bg-indigo-600 rounded font-medium'>
                    <Link to='/project'>More Projects</Link>
                </button>
            </div>
        </div>

    )
}

export default Landing
