import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type BannerTemplateProps = {
    alt: string,
    imgHref: string,
    imgSubtitle?: string | null,
    imgTitle?: string | null,
    imgButtonText?: string | null,
    name?: string | null,
    description?: string | null,
    price?: number | null 
}

export type ItemBanner = {
    linkHref?: string,
    alt: string,
    imgHref: string,
    imgSubtitle?: string | null,
    imgTitle?: string | null,
    imgButtonText?: string | null,
    name?: string | null,
    description?: string | null,
    price?: number | null
}

const BannerTemplate = ({alt, imgHref, imgSubtitle, imgTitle, imgButtonText, name, description, price}: BannerTemplateProps) => {
    return (
        <>
            <div className='relative w-full'>
                <Image 
                    alt={alt || ""}
                    src={imgHref}
                    width={400}
                    height={400}
                    className='w-full h-fit object-contain rounded-sm'
                />
                <p className='absolute left-10 bottom-[135px] md:bottom-36 z-10 text-base text-gray-200'>{imgSubtitle}</p>
                <p className='absolute left-10 bottom-24 z-10 text-2xl md:text-3xl font-medium'>{imgTitle}</p>
                {imgButtonText && <div className='absolute left-10 bottom-10 z-10 rounded-lg px-4 py-1 bg-dark-100'>{imgButtonText}</div>}
            </div>
            {name && <p className='text-lg font-medium mt-2 ml-1'>{name}</p>}
            {description && <p className='text-gray-300 ml-1'>{description}</p>}
            {price && <p className='text-gray-300 ml-1'>{price} PLN</p>}
        </>
    )
}

const ItemBanner = React.forwardRef<HTMLDivElement, ItemBanner>(({linkHref, alt, imgHref, imgSubtitle, imgTitle, imgButtonText, name, description, price}, ref) => {
  return linkHref ? 
    <div ref={ref} className='relative flex flex-col min-w-[80vw] md:min-w-[30vw]'>
        <Link href={linkHref} className='w-full'>
            <BannerTemplate alt={alt} imgHref={imgHref} imgSubtitle={imgSubtitle} description={description} imgButtonText={imgButtonText} imgTitle={imgTitle} name={name} price={price} />
        </Link>
    </div>
        :
    <div ref={ref} className='relative flex flex-col min-w-[30vw]'>
        <BannerTemplate alt={alt} imgHref={imgHref} imgSubtitle={imgSubtitle} description={description} imgButtonText={imgButtonText} imgTitle={imgTitle} name={name} price={price} />
    </div>
})

export default ItemBanner