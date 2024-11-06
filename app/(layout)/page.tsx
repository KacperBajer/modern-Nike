import Carousel from '@/components/Carousel';
import Video from '@/components/Video';
import { MainPageSections } from '@/lib/constants';
import React from 'react'

const page = () => {

  return (
    <div className='flex flex-col gap-20'>
      
      <div className='relative'>
        <div className='sm:block hidden'><Video href='/heroVideo.mp4' /></div>
        <div className='sm:hidden'><Video href='/heroVideo2.mp4' /></div>
        <p className='absolute left-10 bottom-32 text-7xl font-bold'>RUN IN THE RAIN</p>
        <p className='absolute left-10 text-xl bottom-20 font-medium'>Hit the road with Nike shoes</p>
        <button className='absolute left-10 bottom-5 rounded-lg py-1.5 px-4 bg-dark-100 font-semibold'>Browse</button>
      </div>


      {MainPageSections.map(item => (
        <Carousel key={item.id} items={item.items} title={item.title} />
      ))}

      <div className='w-full flex justify-center px-2 md:px-12 pb-5'>
        <div className='flex justify-center p-2 bg-dark-200 w-full rounded-md'>
          <p className='text-sm font-medium'>Made by Kacper Bajer</p>
        </div>
      </div>

    </div>
  )
}

export default page
