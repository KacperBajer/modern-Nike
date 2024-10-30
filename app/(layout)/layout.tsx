import Header from '@/components/Header';
import React from 'react'

const layout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='flex flex-col w-full bg-dark-100 text-white min-h-screen'>
        <Header />
        {children}
    </div>
  )
}

export default layout