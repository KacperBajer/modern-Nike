import HeroVideo from '@/components/HeroVideo'
import ItemBanner from '@/components/ItemBanner';
import { ImagesSectionLatest } from '@/lib/constants';
import Image from 'next/image'
import React, { useRef } from 'react'
import { IoIosArrowBack } from "react-icons/io";

const page = () => {


  return (
    <div className='flex flex-col gap-20 pt-[84px]'>
      <div className='relative'>
        <HeroVideo />
        <p className='absolute left-10 bottom-32 text-7xl font-bold'>RUN IN THE RAIN</p>
        <p className='absolute left-10 text-xl bottom-20 font-medium'>Hit the road with Nike shoes</p>
        <button className='absolute left-10 bottom-5 rounded-lg py-1.5 px-4 bg-dark-100 font-semibold'>Browse</button>
      </div>

      <div className='flex flex-col'>
        <div className='px-12 mb-5 flex justify-between items-center'>
          <p className='text-3xl'>The latest and greatest</p>
          <div className='flex gap-2'>
            <div className='p-3 rounded-full bg-dark-200'>
              <IoIosArrowBack className='text-lg' />
            </div>
            <div className='p-3 rounded-full bg-dark-200'>
              <IoIosArrowBack className='rotate-180 text-lg' />
            </div>
          </div>
        </div>
        <div className='overflow-x-auto flex gap-5 ps-12 pe-12 hideScrollbar'>
          {ImagesSectionLatest.map(item => (
            <ItemBanner 
              key={item.id}
              alt={item.alt}
              imgHref={item.imgHref}
              imgTitle={item.imgTitle}
            />
          ))}
        </div>
      </div>

      <div>
        <p>DD</p>
      </div>

    </div>
  )
}

export default page
