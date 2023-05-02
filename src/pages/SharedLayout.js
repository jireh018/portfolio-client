import React from 'react'
import { Outlet } from 'react-router-dom'
import {
    NavBar,
    Footer,
} from '../components'

const SharedLayout = () => {
    return (
        <div className='mx-5 md:container md:mx-auto mt-5 '>
            <NavBar />
            <Outlet />
            <hr className='mt-5' />
            <Footer />
        </div>
    )
}

export default SharedLayout

//className="dark ..."
//className='mt-5 lg:mx-96 sm:mx-14 bg-orange-600 dark:bg-gray-900'