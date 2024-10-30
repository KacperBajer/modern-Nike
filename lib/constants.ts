export type HeaderLink = {
    id: number,
    name: string,
    href: string
}

export type ImageSection = {
    id: number,
    href: string,
    alt: string
}

export const HeaderLinks: HeaderLink[] = [
    {
        id: 1,
        name: 'News',
        href: 'news'
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
        href: '/latest1.jpg',
        alt: ''
    },
    {
        id: 2,
        href: '/latest2.png',
        alt: ''
    },
    {
        id: 3,
        href: '/latest3.jpg',
        alt: ''
    },
    {
        id: 4,
        href: '/latest4.jpg',
        alt: ''
    },
]