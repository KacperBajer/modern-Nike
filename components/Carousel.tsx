'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import ItemBanner from './ItemBanner'
import { CarouselItem } from '@/lib/constants'

type Props = {
    title: string,
    items: CarouselItem[]
}

const Carousel = ({title, items}: Props) => {

    const [scrollValue, setScrollValue] = useState(0)
    const [isEnd, setIsEnd] = useState(false)
    const [isStart, setIsStart] = useState(true)
    const scrollContainerRef = useRef(null)
    const firstItemRef = useRef(null)
    
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollValue : scrollValue,
            behavior: 'smooth',
          })
        }
    }

    useEffect(() => {
      if (firstItemRef.current) {
        const firstItemWidth = firstItemRef.current.offsetWidth
        console.log(firstItemWidth + 10)
        setScrollValue(firstItemWidth + 10)
      }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setIsEnd(scrollLeft + clientWidth >= scrollWidth)
            setIsStart(scrollLeft  === 0)
        }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
    }

    return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }
}, [scrollContainerRef])

  return (
    <div className='flex flex-col'>
        <div className='px-12 mb-5 flex justify-between items-center'>
          <p className='text-3xl'>{title}</p>
          <div className='flex gap-2'>
            <button disabled={isStart} className={`p-3 rounded-full bg-dark-200 ${isStart ? 'opacity-50' : 'hover:cursor-pointer'}`} onClick={() => scroll('left')}>
              <IoIosArrowBack className='text-lg' />
            </button>
            <button disabled={isEnd} className={`p-3 rounded-full bg-dark-200 ${isEnd ? 'opacity-50' : 'hover:cursor-pointer'}`} onClick={() => scroll('right')}>
              <IoIosArrowBack className='rotate-180 text-lg' />
            </button>
          </div>
        </div>
        <div ref={scrollContainerRef} className='overflow-x-auto flex gap-5 ps-12 pe-12 hideScrollbar'>
          {items.map(item => (
            <ItemBanner 
              key={item.id}
              alt={item.alt}
              imgHref={item.imgHref}
              imgTitle={item.imgTitle}
              imgSubtitle={item.imgSubtitle}
              linkHref={item.linkHref}
              imgButtonText={item.imgButtonText}
              name={item.name}
              description={item.description}
              price={item.price}
              ref={firstItemRef}
            />
          ))}
        </div>
      </div>
  )
}

export default Carousel