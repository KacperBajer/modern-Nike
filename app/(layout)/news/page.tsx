import { NewsHeaderLinks } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-20'>
        <section className='w-full flex flex-col gap-4'>
            <div className='w-full flex justify-center'>
                <div className='bg-dark-200 flex items-center justify-center w-full px-4 py-2 rounded-md text-sm'>
                    {NewsHeaderLinks.map(item => (
                        <Link
                        key={item.id}
                        href={item.href}
                        className={`px-3 py-1 hover:cursor-pointer hover:bg-dark-100/50 rounded-lg transition-all duration-300`}
                    >
                        {item.name}
                    </Link>
                    ))}
                </div>
            </div>

            <div>
                <Image 
                    alt=''
                    src={'/newsDesktop.jpg'}
                    width={1926}
                    height={669}
                    className='w-full h-fit'
                />
            </div>

        </section>
    </div>
  )
}

export default page