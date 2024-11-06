import { ProductCardData } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProductCard = ({ description, linkHref, name, price, alt, imgHref }: ProductCardData) => {
  return (
    <Link href={linkHref} className='realtive flex flex-col'>
      <Image
        alt={alt}
        src={imgHref}
        className='w-full h-fit rounded-md'
        height={400}
        width={400}
      />
      {name && <p className='text-lg font-medium mt-2 ml-1'>{name}</p>}
      {description && <p className='text-gray-300 ml-1'>{description}</p>}
      {price && <p className='text-gray-300 ml-1'>{price} PLN</p>}
    </Link>
  )
}

export default ProductCard