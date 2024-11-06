'use client'
import { useProductsContext } from '@/context/Products'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CheckBox from './CheckBox'
import { Filters } from '@/lib/constants'
import { getProducts } from '@/lib/getProdcuts'

export type queryOptions = {
  sex?: string[],
  size?: string[],
  color?: string[],
}

const ShopSideBar = () => {

  const { data } = useProductsContext()
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [query, setQuery] = useState<queryOptions>({
    sex: searchParams.get('sex')?.split(',') || [],
    size: searchParams.get('size')?.split(',') || [],
    color: searchParams.get('color')?.split(',') || [],
  })

  const updateQueryParams = (newQuery: queryOptions) => {
    const params = new URLSearchParams();

    Object.entries(newQuery).forEach(([key, value]) => {
      if (value && value.length > 0) {
        params.set(key, value.join(','));
      }
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    updateQueryParams(query)
  }, [query])

  const handleUpdate = (key: keyof queryOptions, value: string) => {
    setQuery((prevQuery) => {
      const currentValue = prevQuery[key] || [];

      if (currentValue.includes(value)) {
        return {
          ...prevQuery,
          [key]: currentValue.filter((item) => item !== value),
        };
      } else {
        return {
          ...prevQuery,
          [key]: [...currentValue, value],
        };
      }
    });
  };


  return (
    <div className='py-5 flex flex-col rounded-md w-[200px] bg-dark-200'>
      <p className='text-xl mb-3 ml-5 first-letter:capitalize'>{pathname.replace('/', '')} ({data.length})</p>
      {Filters.map((item, index) => (
        <div key={index}>
          <p className='mb-0,5 text-lg ml-5 font-medium'>{item.displayName}</p>
          {item.options.map((option, index) => (
            <div key={index} onClick={() => handleUpdate(item.queryName, option.queryName)} className='flex gap-2 items-center py-1.5 px-5 hover:cursor-pointer hover:bg-dark-100/50'>
              <CheckBox value={(query[item.queryName as keyof queryOptions] || []).includes(option.queryName)} onChange={() => { }} />
              <p className='text-sm text-gray-100'>{option.displayName}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ShopSideBar