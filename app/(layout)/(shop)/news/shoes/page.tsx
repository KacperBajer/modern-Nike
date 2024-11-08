'use client'
import ProductCard from '@/components/ProductCard'
import { useProductsContext } from '@/context/Products'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  
  const {data, setData} = useProductsContext()
  const searchParams = useSearchParams()
  
  const [query, setQuery] = useState({
    sex: searchParams.get('sex'),
    size: searchParams.get('size'),
    color: searchParams.get('color'),
  })

  return (
    <div className='grid grid-cols-3 gap-5 w-full overflow-y-auto hideScrollbar '>
        {data.map(item => (
            <ProductCard 
              description={item.description}
              linkHref={item.linkHref}
              imgHref={item.imgHref}
              name={item.name}
              price={item.price}
              alt={item.alt}
              id={item.id}
              key={item.id}
            />
        ))}
    </div>
  )
}


export default page