import React from 'react'

import porfilePhoto from '../assets/images/z235.jpg'
import amazon from '../assets/images/skills/express-logo.png'
import sony from '../assets/images/skills/javascript.png'
import adidas from '../assets/images/skills/mongodb-logo2.webp'
import fila from '../assets/images/skills/nodejs-ar21.png'
import newBalance from '../assets/images/skills/reactjs.png'
import samsung from '../assets/images/skills/salesforce.jpg'
import canon from '../assets/images/skills/SalesforceCodex_Apex.jpg'
import puma from '../assets/images/skills/tailwindcss-ar21.png'


const AboutMe = () => {
    return (
        <div className=''>
            <div className='container m-auto mt-40'>
                {/* mt-40 grid md:grid-cols-1 lg:grid-cols-2 */}
                <div className='items-center block lg:flex lg:gap-10 mt-10 lg:mt-20 md:grid-cols-1'>
                    <div className='w-full lg:w-1/4 mb-7 md:mb-0 md:grid-rows-1' >
                        <img src={porfilePhoto} alt="Profile" className='rounded-lg w-96' />
                    </div>
                    <div className='font-general-regular w-full lg:w-3/4 text-left md:grid-rows-2' >
                        <p className='text-lg' >
                            Hi, I'm Jireh, a skilled developer with experience in Salesforce and Node JS.
                            I am passionate about technologies as all and especially the web platform, I love learning new technologies and getting my hands on experience. I am a forever learner and always looking forward to expand my skills and knowledge.
                        </p>

                        <p className='text-lg' >
                            As a Salesforce Associate, I have experience in managing and developing custom Salesforce solutions including creating custom objects, fields, workflows, triggers. I am familiar with Apex, Lightning Web component, SOQL, JavaScript and other Salesforce technologies.
                            <br />
                            As a Node JS Developer, I have experience in designing and developing REST APIs and web applications. I am proficient using framework such as Express JS, React JS, Next JS, as well as databases such as MongoDB and MYQL. I am learning everyday new awesome stuffs about Node JS.

                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-between mt-10 w-full bg-slate-100 lg:h-60'>
                <div className='container place-items-center m-auto grid lg:grid-cols-4 md:grid-cols-1'>
                    <div className='place-items-center grid grid-cols-1'>
                        {/* <h1 className='text-3xl text-black bold' >2</h1>
                        <p className='text-2xl mb-8 text-black'>Years of experience</p> */}
                    </div>
                    <div className='place-items-center grid grid-cols-1'>
                        {/* <h1 className='text-3xl text-black bold' >2</h1>
                        <p className='text-2xl mb-8 text-black'>Stars on Github</p> */}
                    </div>
                    <div className='place-items-center grid grid-cols-1'>
                        {/* <h1 className='text-3xl text-black bold' >2%</h1>
                        <p className='text-2xl mb-8 text-black'>Positive feedback</p> */}
                    </div>
                    <div className='place-items-center grid grid-cols-1'>
                        {/* <h1 className='text-3xl text-black bold' >60%</h1>
                        <p className='text-2xl mb-8 text-black'>Projects completed</p> */}
                    </div>
                </div>
            </div>

            <div className='container flex justify-center m-auto'>
                <div className='mt-20'>
                    <h1 className='text-center text-2xl mb-8 text-black'>Some of My Skills</h1>

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
