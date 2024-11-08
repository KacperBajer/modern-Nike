'use client'
import Carousel from '@/components/Carousel';
import Loading from '@/components/Loading';
import Video from '@/components/Video';
import UseWindowSize from '@/customHook/UseWindowSize';
import { MainPageSections } from '@/lib/constants';
import React from 'react'

const page = () => {

  const windowSize = UseWindowSize()

  if(!windowSize.width) {
    return <Loading />
  }

  return (
    <div className='flex flex-col gap-20'>
      
      <div className='relative'>
        <Video href={windowSize.width >= 768 ? '/heroVideo.mp4' : '/heroVideo2.mp4'} />
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
