import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-20 px-6 bg-gradient-to-{r} from-[#01191d] to-[#022c2b]'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-2 text-gray-400'>About <span className='text-outline'>Me</span></h2>

        <p className='text-gray-500 text-center mb-12 '>Get to know more about my background and experience.</p>
        <div className='bg-[#022c2b] backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20 '>
          <div>
            <h3 className='text-xl font-semibold mb-4 text-white'>Who I am?</h3>
            <p className='text-slate-300 mb-4'>
              I am passionate web web developer and Desiner learning short course with MASTER IT. I don't have any yet experience with coding but i am learning
              to know what is coding and what is coding using for what?. and i can understand more about coding.
              I hope i can work with coding in poarttime with someone can give me an apportunity.and I believe I will working hard on it.
            </p>

            <p className='text-slate-300 mb-4'>
              When I am not coding you can find me at home, gaming reading listening music, whact Movie.
              I don't know if i finished learing short course i still remember it or not but i do remeber what is coding using for what and why do people need
              coding because coding is very importance for all businesss.
            </p>
          </div>

          <div className='mt-8 grid grid-cols-2 gap-4 text-gray-300'>
            <div>
              <p>Name:</p>
              <p className='font-medium text-white'>UN SODANIKA</p>
            </div>
            <div>
              <p>E-mail:</p>
              <p className='font-medium text-white'>sodanikaun@gmail.com</p>
            </div>
            <div>
              <p>Phone No:</p>
              <p className='font-medium text-white'>087 55 0001</p>
            </div>
            <div>
              <p>Availability:</p>
              <p className='font-medium text-white'>FULL TIME</p>
            </div>

          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4 text-white'>Expereince</h3>
            <div className='space-y-6'>
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h4 className='font-semibold text-white'>Senior Developer</h4>
                    <p className=' text-teal-400 text-sm'>Tech IT Solution pvt.ltd</p>
                  </div>
                  <span className='px-3 bg-teal-400/10 rounded-full text-[10px] sm:text-sm'>2025-2026</span>
                </div>

              </div>
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h4 className='font-semibold text-white'>Full Stack Developer</h4>
                    <p className=' text-teal-400 text-sm'>Soft IT Solution pvt.ltd</p>
                  </div>
                  <span className='px-3 bg-teal-400/10 rounded-full text-[10px] sm:text-sm'>2025-2026</span>
                </div>

              </div>
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h4 className='font-semibold text-white'>Backend Developer</h4>
                    <p className=' text-teal-400 text-sm'>Fin Tech IT Solution pvt.ltd</p>
                  </div>
                  <span className='px-3 bg-teal-400/10 rounded-full text-[10px] sm:text-sm'>2025-2026</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About