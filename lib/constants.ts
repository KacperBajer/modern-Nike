import { queryOptions } from "@/components/ShopSideBar"

export type HeaderLink = {
    id: number,
    name: string,
    href: string
}

export type CarouselItem = {
    id: number,
    linkHref?: string,
    image?: string,
    alt: string,
    imgTitle?: string,
    imgHref?: string
    imgSubtitle?: string,
    imgButtonText?: string | null,
    name?: string | null,
    description?: string | null,
    price?: number | null 
}

export type ProductCardData = {
    id: number,
    image: string,
    imgHref?: string,
    alt: string,
    name: string,
    description: string,
    price: number
}

export type MainPageSection = {
    id: number,
    title: string,
    items: CarouselItem[],
}

export const HeaderLinks: HeaderLink[] = [
    {
        id: 1,
        name: 'News',
        href: '/news',

    },
    {
        id: 2,
        name: 'Men',
        href: '/men'
    },
    {
        id: 3,
        name: 'Women',
        href: '/women'
    },
    {
        id: 4,
        name: 'Kids',
        href: '/kids'
    },
]

export const NewsHeaderLinks: HeaderLink[] = [
    {
        id: 1,
        name: 'Shoes',
        href: '/news/shoes',

    },
    {
        id: 2,
        name: 'Pants',
        href: '/news/pants'
    },
    {
        id: 3,
        name: 'T-shirts',
        href: '/news/tshirts'
    },
    {
        id: 4,
        name: 'Sweatshirts and jackets',
        href: '/news/sweatshirtsandjackets'
    },
]

export const MainPageSections: MainPageSection[] = [
    {
        id: 1,
        title: 'The latest and greatest',
        items: [
            {
                id: 1,
                imgHref: '/latest1.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Nike Tech",
            },
            {
                id: 2,
                imgHref: '/latest2.png',
                alt: '',
                linkHref: '/',
                imgButtonText: "Mad Voltage",
            },
            {
                id: 3,
                imgHref: '/latest3.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Winter products",
            },
            {
                id: 4,
                imgHref: '/latest4.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Style by Cortez",
            },
        ]
    },
    {
        id: 2,
        title: 'Browse our icons',
        items: [
            {
                id: 1,
                imgHref: '/ourIcons1.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Air Max",

            },
            {
                id: 2,
                imgHref: '/ourIcons2.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Air Force 1",
            },
            {
                id: 3,
                imgHref: '/ourIcons3.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Dunk",
            },
            {
                id: 4,
                imgHref: '/ourIcons4.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Y2K",
            },
            {
                id: 5,
                imgHref: '/ourIcons5.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Air Jordan",
            },
        ]
    },
    {
        id: 3,
        title: 'Sports disciplines',
        items: [
            {
                id: 1,
                imgHref: '/disciplines1.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Running",

            },
            {
                id: 2,
                imgHref: '/disciplines2.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Football",
            },
            {
                id: 3,
                imgHref: '/disciplines3.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Basketball",
            },
            {
                id: 4,
                imgHref: '/disciplines4.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Gym",
            },
            {
                id: 5,
                imgHref: '/disciplines5.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Tenis",
            },
        ]
    },
    {
        id: 4,
        title: 'New products',
        items: [
            {
                id: 1,
                imgHref: '/New1.jpg',
                alt: '',
                linkHref: '/',
                name: 'Kobe X-Ray',
                description: "Men's knitted hoodie",
                price: 479.99,
            },
            {
                id: 2,
                imgHref: '/New2.jpg',
                alt: '',
                linkHref: '/',
                name: 'Nike Dunk Low',
                description: "Shoes for teenagers",
                price: 419.99,           
            },
            {
                id: 3,
                imgHref: '/New3.jpg',
                alt: '',
                linkHref: '/',
                name: 'Nike Air Max Plus',
                description: "Men's shoes",
                price: 839.99,            
            },
            {
                id: 4,
                imgHref: '/New4.jpg',
                alt: '',
                linkHref: '/',
                name: 'Nike Air Force 1 LX',
                description: "Men's shoes",
                price: 619.99,
            },
            {
                id: 5,
                imgHref: '/New5.jpg',
                alt: '',
                linkHref: '/',
                name: 'Nike Air Max 95',
                description: "Men's shoes",
                price: 839.99,
            },
            {
                id: 6,
                imgHref: '/New6.jpg',
                alt: '',
                linkHref: '/',
                name: 'Nike Solo Swoosh',
                description: "Men's knitted hoodie",
                price: 479.99,
            },
        ]
    },
    {
        id: 5,
        title: 'See also',
        items: [
            {
                id: 1,
                imgHref: '/Men.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Men",

            },
            {
                id: 2,
                imgHref: '/Women.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Women",
            },
            {
                id: 3,
                imgHref: '/Kids.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Kids",
            },
            {
                id: 4,
                imgHref: '/Teenagers.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Teenagers",
            },
        ]
    },
    {
        id: 6,
        title: 'Membership Nike',
        items: [
            {
                id: 1,
                imgHref: '/membership1.png',
                alt: '',
                linkHref: '/',
                imgButtonText: "Personalize",
                imgSubtitle: "Nike By You",
                imgTitle: "Personalization service"
            },
            {
                id: 2,
                imgHref: '/membership2.png',
                alt: '',
                linkHref: '/',
                imgButtonText: "Browse",
                imgSubtitle: "Membership products",
                imgTitle: "Exclusive access"
            },
            {
                id: 3,
                imgHref: '/membership3.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Celebrate",
                imgSubtitle: "Membership rewards",
                imgTitle: "How we express thanks"
            },
            {
                id: 4,
                imgHref: '/membership4.jpg',
                alt: '',
                linkHref: '/',
                imgButtonText: "Move",
                imgSubtitle: "Sports and health",
                imgTitle: "Activity for you"
            },
        ]
    },
]


type FilterOption = {
    displayName: string,
    queryName: string,
}

type Filter = {
    displayName: string,
    queryName: keyof queryOptions,
    options: FilterOption[],

}

export const Filters: Filter[] = [
    {
        displayName: 'Sex',
        queryName: 'sex',
        options: [{
            displayName: 'Men',
            queryName: 'men'
        },
        {
            displayName: 'Women',
            queryName: 'women'
        },
        {
            displayName: 'Unisex',
            queryName: 'unisex'
        }
    ],
    },
]
