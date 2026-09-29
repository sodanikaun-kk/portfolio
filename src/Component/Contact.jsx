import { PiPhone } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { IoLocateSharp } from 'react-icons/io5'
import { LiaLinkedin } from 'react-icons/lia'
import { MdEmail } from 'react-icons/md'


const Contact = () => {
    return (
        <section 
            id='Contact'
            className='py-20 px-6 bg-gradient-to-[r] from-[#01191d] to-[#022c2b]'
            >
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-2 text-gray-400'>
                    Get In <span className='text-outline'> Touch</span>
                </h2>

                <p className='text-gray-500 text-center mb-12 '>
                    The tools and Technologies I use to brings ideas to life.
                </p>

                <div className='bg-white/5 backdrop-blur-lg rounded-2xl px-8 md:p-`1 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20'>
                    <div>
                        <h3 className='text-xl font-semibold mb-6 text-white'>
                            Contact Details
                        </h3>
                        <div className='space-y-6'>
                            <div className='flex items-start'>
                                <div className='p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20 '>
                                    <IoLocateSharp className='text-white' />
                                </div>
                                <div>
                                    <h4 className='text-white font-semibold'>Location</h4>
                                    <p className='text-slate-300'>Phnom Penh, Cambodia</p>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20 '>
                                    <MdEmail className='text-white' />
                                </div>
                                <div>
                                    <h4 className='text-white font-semibold'>E-mail</h4>
                                    <p className='text-slate-300'>sodanikaun@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20 '>
                                    <PiPhone className='text-white'/>
                                </div>
                                <div>
                                    <h4 className='text-white font-semibold'>Phone</h4>
                                    <p className='text-slate-300'> 087-55-0001</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h4 className='font-semibold mb-4 text-white'>Follow Me</h4>
                            <div className='flex gap-4'>
                                <div className='p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:text-teal-500 text-white border border-white/20'>
                                    <ImInstagram />
                                </div>
                            </div>
                                <div className='p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:text-teal-500 text-white border border-white/20'>
                                    <FaFacebook/>
                                </div>

                                <div className='p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:text-teal-500 text-white border border-white/20'>
                                    <BsTwitter/>
                                </div>

                                <div className='p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:text-teal-500 text-white border border-white/20'>
                                    <LiaLinkedin/>
                                </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className='text-xl font-semibold mb-6 text-white'>Send me a message</h3>
                        <form action="" className='space-y-4'>
                            <div>
                                <label htmlFor="" className='black mb-2 text-sm text-slate-300'>Your Name</label>
                                <input type="text" className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400 ' />
                            </div>

                            <div>
                                <label htmlFor="" className='black mb-2 text-sm text-slate-300'>Email</label>
                                <input type="text" className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400 ' />
                            </div>
                            
                            <div>
                                <label htmlFor="" className='black mb-2 text-sm text-slate-300'>Subject</label>
                                <input type="text" className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400 ' />
                            </div>

                            <div>
                                <label htmlFor="" className='black mb-2 text-sm text-slate-300'>Message</label>
                                <input textarea type="text" className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400 ' />
                            </div>

                            <button className='px-6 py-2 rounded-full bg-gradient-to-[r] from-teal-400 to-teal-700 text-white'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact