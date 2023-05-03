import React from 'react'
import { Link } from 'react-router-dom'
import cardImage from '../assets/images/projects/webdev.jpg'
import { projects } from '../utils'

const Projects = () => {
    return (
        <div className='mx-auto mt-28 mb-20'>
            <div className=''>
                <h1 className='font-semibold text-2xl md:text-3xl uppercase text-center'>Projects portfolio </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => (
                        <Link to={project.link}>
                            <div className='mx-auto mt-10 max-w-md overflow-auto shadow-md bg-white rounded-xl h-[500px]'>
                                <img className="w-full h-3/5" src={cardImage} alt="Sunset in the mountains" />
                                <div className='text-center py-4'>
                                    <p className="font-bold text-gray-700 text-base">
                                        {project.title}
                                    </p>
                                    <p className='bg-slate-300'>
                                        {project.subtitle}
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                }


            </div>

        </div>
    )
}

export default Projects
