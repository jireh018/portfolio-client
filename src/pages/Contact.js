import React, { useState } from 'react'
import { FaAddressCard, FaMailBulk, FaPhone } from 'react-icons/fa'

const Contact = () => {
    const [formStatus, setFormStatus] = useState('send message')

    const handleSumbitForm = (e) => {
        e.preventDefault()
        setFormStatus('sending...')
        const { subject, email, message } = e.target.elements
        let dataForm = {
            subject: subject.value,
            email: email.value,
            message: message.value
        }
        console.log(dataForm)
    }
    return (
        <div className='container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10'>
            <div className='w-full lg:w-1/2'>
                <section className="bg-white dark:bg-gray-900 border border-gray-300 rounded">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                        {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
                        <form action="https://public.herotofu.com/v1/b9839e70-e9d5-11ed-b2e2-c10354b56774" method="POST" accept-charset="UTF-8" className="space-y-8" onSubmit={handleSumbitForm}>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                            </div>
                            <div>
                                <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="bg-cyan-500 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                {formStatus}</button>
                        </form>
                    </div>
                </section>
            </div>

            <div className='w-full lg:w-1/2 mb-10 lg:mb-0'>
                <div className='text-left max-w-x1 px-6'>
                    <h2 className='font-medium text-2xl mt-12 mb-8'>Contact details</h2>
                    <ul>
                        <li className='flex'>
                            <i className='text-2xl text-gray-500 mr-4'>
                                <FaAddressCard />
                            </i>
                            <span>279 Champlain Street, Dieppe NB E1A 1P2</span>
                        </li>
                        <li className='flex pt-10'>
                            <i className='text-2xl text-gray-500 mr-4'>
                                <FaMailBulk />
                            </i>
                            <span>jirehtuto71@gmail.com</span>
                        </li>
                        <li className='flex pt-10'>
                            <i className='text-2xl text-gray-500 mr-4'>
                                <FaPhone />
                            </i>
                            <span>438 483 7213</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact
