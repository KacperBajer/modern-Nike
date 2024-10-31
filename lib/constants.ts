export type HeaderLink = {
    id: number,
    name: string,
    href: string
}

export type ImageSection = {
    id: number,
    linkHref?: string,
    imgHref: string,
    alt: string,
    imgTitle?: string,
}

export const HeaderLinks: HeaderLink[] = [
    {
        id: 1,
        name: 'News',
        href: 'news',

    },
    {
        id: 2,
        name: 'Man',
        href: 'man'
    },
    {
        id: 3,
        name: 'Women',
        href: 'women'
    },
    {
        id: 4,
        name: 'Kids',
        href: 'kids'
    },
]

export const ImagesSectionLatest: ImageSection[] = [
    {
        id: 1,
        imgHref: '/latest1.jpg',
        alt: '',
        linkHref: '/',
    },
    {
        id: 2,
        imgHref: '/latest2.png',
        alt: '',
        linkHref: '/',
    },
    {
        id: 3,
        imgHref: '/latest3.jpg',
        alt: '',
        linkHref: '/',
    },
    {
        id: 4,
        imgHref: '/latest4.jpg',
        alt: '',
        linkHref: '/',
    },
]