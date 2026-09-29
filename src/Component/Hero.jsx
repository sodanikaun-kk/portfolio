import React,{Fragment} from 'react';
import AnimatedTitles from './AnimatedTitles'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'

const Hero = () => {
  return (
    <fragment>
        <section id='home' className='relative min-h-screen flex items-center justify-center pt-16 pb-16'>
        <div className="absolute inset-0 bg-[url('./assets/particle-1-840x441.jpg')] bg-center bg-cover bg-no-repeat"></div>
        <div className='absolute inset-0'></div>

        {/*content*/}

        <div className='relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center'>
            <div className='flex-1 text-center md:text-left'>
                <h3 className='text-lg font-light capitalize tracking-wide texy-teal-500 '>
                    I am UN SODANIKA
                </h3>
                <AnimatedTitles />
                <p className='mt-4 text-gray-300 max-w-xl'>
                    I create beautiful, funtional website and applications with modern technologies. Let's works togerther your ideas to life.
                </p>
                    <div className='mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400'>
                        <span className='px-4 py-2 bg-white/10 backdrop-blur-md rounded-full'>web Design</span>
                        <span className='px-4 py-2 bg-white/10 backdrop-blur-md rounded-full'>wFrontend Development</span>
                        <span className='px-4 py-2 bg-white/10 backdrop-blur-md rounded-full'>UI/UX Design</span>
                    </div>
                <div className='flex gap-5 mt-5 justify-center md:justify-start'>
                    <button className='p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors'>
                        <FaFacebook />
                    </button>
                    <button className='p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors'>
                         <BsWhatsapp />
                    </button>
                    <button className='p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors'>
                         <LiaLinkedin />
                    </button>
                    <button className='p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors'>
                         <BsTwitter />
                    </button>
                </div>

                <div className='mt-8 flex flex-col sm:flex-row gap-4'>
                    <button className='px-6 cursor-pointer py-2 text-sm rounded-full bg-gradient-to-{r} from-teal-400 to-teal-700 font-light
                    text-white hover: opacity-70 transition-opacity '>Viw My Works</button>

                    <button className='px-6 cursor-pointer py-2 text-sm rounded-full bg-white/10 backdrop-blur-md font-light
                    text-white hover: opacity-70 transition-opacity'>Download CV</button>
                </div>
            </div>
        </div>
        </section>
    </fragment>
  )
}

export default Hero