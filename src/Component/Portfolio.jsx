import React from 'react';
import { portfolioItems } from '../Data/data';
import { div } from 'framer-motion/client';
const Portfolio = () => {
  return (
    <section 
    id='Portfolio' className='py-20 px-6 bg-gradient-to-{r} from-[#01191d] to-[#022c2b]'
    >
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-2 text-gray-300'>
          My <span className='text-outline'>Portfolio</span>
        </h2>
        <p className='text-gray-500 text-center mb-12 '>
          The tools and Technologies I use to brings ideas to life.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            portfolioItems.map((item, index) => (
              <div key={index} className='bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:translate-y-1
            transition-transform'>
                <div className='h-4 overflow-hidden'>
                  <img src={item.image} className='w-full h-full object-cover transition-transform hover:scale-105' 
                  alt=""
                  /> 
                </div>
                <div className='p-5'>
                    <h3 className='font-semibold text-lg text-white'>{item.title}</h3>
                    <p className='text-slate-400 kt-2'>{item.category}</p>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;