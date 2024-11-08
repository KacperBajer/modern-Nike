'use client'
import Carousel from '@/components/Carousel'
import Loading from '@/components/Loading'
import UseWindowSize from '@/customHook/UseWindowSize'
import { NewsHeaderLinks } from '@/lib/constants'
import { getNewsPageData, PageCarouselSection } from '@/lib/getNewsPageData'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    
    
    const [data, setData] = useState<PageCarouselSection[] | null>(null)

    const windowSize = UseWindowSize()
    
    useEffect(() => {
        const getData = async () => {
            const res = await getNewsPageData()
            setData(res)
        }
        getData()
    }, [])

    if(!windowSize.width || !data) {
        return <Loading />
    }

    return (
        <div className='flex flex-col gap-20'>
            <section className='w-full flex flex-col gap-4'>
                <div className='bg-dark-200/70 flex items-center justify-center w-full px-4 py-2 text-sm'>
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

                <div className=''>
                    <Image
                        alt=''
                        src={windowSize.width >= 768 ? '/newsDesktop.jpg' : '/newsMobile.jpg'}
                        width={1926}
                        height={669}
                        className='w-full h-fit'
                    />
                </div>

            </section>

            {data?.map((item, index) => (
                <Carousel key={index} items={item.items} title={item.title} />
            ))}
        </div>
    )
}

export default page