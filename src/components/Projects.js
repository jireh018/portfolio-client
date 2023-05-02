import React from 'react'
import cardImage from '../assets/images/gradient-mountain-landscape.avif'


let projects = [
    {
        title: 'Google AI',
        type: 'Cloud Application'
    },
    {
        title: 'E_COMMERCE API',
        type: 'REST API'
    },
    {
        title: 'Okapi Store',
        type: 'Web application'
    },
    {
        title: 'Student Rent',
        type: 'Mobile Application'
    },
    {
        title: 'Deloitte Interview',
        type: 'Salesforce Application'
    },
    {
        title: 'TODO LIST',
        type: 'React Application'
    },
]

const Projects = () => {
    return (
        <div className='mx-auto mt-28 mb-20'>
            <div className=''>
                <h1 className='font-semibold text-2xl md:text-3xl uppercase text-center'>Projects portfolio </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => (
                        <div className='mx-auto mt-10 max-w-md overflow-auto shadow-md bg-slate-300 rounded-xl h-[450px]'>
                            <img className="w-full h-4/5" src={cardImage} alt="Sunset in the mountains" />
                            <div className='text-center py-4 h-1/5'>
                                <p className="text-gray-700 text-base">
                                    {project.title}
                                </p>
                                <p className="text-gray-700 text-base">
                                    {project.type}
                                </p>
                            </div>
                        </div>
                    ))
                }


            </div>

        </div>
    )
}

export default Projects
