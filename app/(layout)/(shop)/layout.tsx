import ShopSideBar from '@/components/ShopSideBar';
import { ProductsProvider } from '@/context/Products';
import React from 'react'

const layout = async ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <ProductsProvider>
      <div className='flex gap-5 px-5 pb-5 flex-1 overflow-y-hidden max-h-[calc(100vh-84px)]'>
        <ShopSideBar />
        {children}
      </div>
    </ProductsProvider>
  )
}

export default layout