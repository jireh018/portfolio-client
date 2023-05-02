import React from 'react'

import porfilePhoto from '../assets/images/aboutMeProfile.jpeg'
import amazon from '../assets/images/amazon.png'
import sony from '../assets/images/sony.png'
import adidas from '../assets/images/addidas.png'
import fila from '../assets/images/fila.png'
import newBalance from '../assets/images/newBalance.png'
import samsung from '../assets/images/samsung.png'
import canon from '../assets/images/canon.png'
import puma from '../assets/images/puma.png'

const AboutMe = () => {
    return (
        <div className=''>
            <div className='container m-auto mt-40'>
                {/* mt-40 grid md:grid-cols-1 lg:grid-cols-2 */}
                <div className='block lg:flex lg:gap-10 mt-10 lg:mt-20 md:grid-cols-1'>
                    <div className='w-full lg:w-1/4 mb-7 md:mb-0 md:grid-rows-1' >
                        <img src={porfilePhoto} alt="Profile" className='rounded-lg w-96' />
                    </div>
                    <div className='font-general-regular w-full lg:w-3/4 text-left md:grid-rows-2' >
                        <p className='text-lg' >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo,
                            eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum,
                            dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati,
                            voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo.
                            Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis!
                            Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.

                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo,
                            eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?
                        </p>
                        <p className='text-lg' >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo,
                            eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-between mt-10 w-full bg-slate-100 lg:h-60'>
                <div className='container place-items-center m-auto grid lg:grid-cols-4 md:grid-cols-1'>
                    <div className='place-items-center grid grid-cols-1'>
                        <h1 className='text-3xl text-black bold' >2</h1>
                        <p className='text-2xl mb-8 text-black'>Years of experience</p>
                    </div>
                    <div className='place-items-center grid grid-cols-1'>
                        <h1 className='text-3xl text-black bold' >2</h1>
                        <p className='text-2xl mb-8 text-black'>Stars on Github</p>
                    </div>
                    <div className='place-items-center grid grid-cols-1'>
                        <h1 className='text-3xl text-black bold' >2%</h1>
                        <p className='text-2xl mb-8 text-black'>Positive feedback</p>
                    </div>
                    <div className='place-items-center grid grid-cols-1'>
                        <h1 className='text-3xl text-black bold' >60%</h1>
                        <p className='text-2xl mb-8 text-black'>Projects completed</p>
                    </div>
                </div>
            </div>

            <div className='container flex justify-center m-auto'>
                <div className='mt-20'>
                    <h1 className='text-center text-2xl mb-8 text-black'>Some of the brands that trust me</h1>

                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-20'>
                        <img src={amazon} alt="amazon" className='w-64 border bg-slate-50 border-slate-100 dark:border-slate-200 shadow-sm rounded-lg mb-8 cursor-pointer' />
                        <img src={adidas} alt="amazon" className='w-64 border bg-slate-50 border-slate-100 dark:border-slate-200 shadow-sm rounded-lg mb-8 cursor-pointer' />
                        <img src={fila} alt="amazon" className='w-64 border bg-slate-50 border-slate-100 dark:border-slate-200 shadow-sm rounded-lg mb-8 cursor-pointer' />
                        <img src={newBalance} alt="amazon" className='w-64 border bg-slate-50 border-slate-100 dark:border-slate-200 shadow-sm rounded-lg mb-8 cursor-pointer' />
                        <img src={puma} alt="amazon" className='w-64 border bg-slate-50 border-slate-100 dark:border-slate-200 shadow-sm rounded-lg mb-8 cursor-pointer' />
                        <img src={canon} alt="amazon" className='w-64 border bg-slate-50 border-slate-100 dark:border-slate-200 shadow-sm rounded-lg mb-8 cursor-pointer' />
                        <img src={samsung} alt="amazon" className='w-64 border bg-slate-50 border-slate-100 dark:border-slate-200 shadow-sm rounded-lg mb-8 cursor-pointer' />
                        <img src={sony} alt="amazon" className='w-64 border bg-slate-50 border-slate-100 dark:border-slate-200 shadow-sm rounded-lg mb-8 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
