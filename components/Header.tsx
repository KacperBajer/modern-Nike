'use client'
import { HeaderLinks } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import SearchBar from './SearchBar';
import { MdMenu } from "react-icons/md";
import { usePathname } from 'next/navigation';

const Header = () => {

    const path = usePathname()
    
  return (
    <div className='fixed w-full top-5 px-5 h-10 z-30 '>
        <div className='flex justify-between items-center w-full bg-dark-200 rounded-lg py-2 px-4'>
            <Link href={'/'} className='w-[316px]'>
                <Image 
                    alt=''
                    src={'/logonike.png'}
                    height={20}
                    width={20}
                    className='h-5 w-fit'
                />
            </Link>

            <section className='md:flex text-sm hidden '>
                {HeaderLinks.map(item => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className={`px-3 py-1 hover:cursor-pointer hover:bg-dark-100/50 rounded-lg transition-all duration-300 ${path === item.href && "bg-dark-100/50"}`}
                    >
                        {item.name}
                    </Link>
                ))}
            </section>

            <section className='md:flex hidden gap-1 items-center'>
                <div className='w-[200px] mr-5'>
                    <SearchBar />
                </div>
                <div className='p-1.5 hover:cursor-pointer rounded-lg hover:bg-dark-100/50'>
                    <IoBag className='text-gray-300' />
                </div>
                <div className='p-1.5 hover:cursor-pointer rounded-lg hover:bg-dark-100/50'>
                    <FaHeart className='text-gray-300' />            
                </div>
                <div className='p-1.5 hover:cursor-pointer rounded-lg hover:bg-dark-100/50'>
                    <FaUser className='text-gray-300' />            
                </div>
            </section>

            <MdMenu className='md:hidden text-xl hover:cursor-pointer text-gray-100' />

        </div>
    </div>
  )
}

export default Header