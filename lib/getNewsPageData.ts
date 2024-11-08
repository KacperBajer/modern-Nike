'use server'
import { Pool } from "pg";
import conn from "./db";
import { ProductCardData } from "./constants";

export type PageCarouselSection = {
    title: string,
    titleHref?: string
    items: ProductCardData[]
}

export const getNewsPageData = async () => {
    try {
        const query = `
            (SELECT * FROM products WHERE category = 'shoes' AND specialtag @> $1 LIMIT 6)
            UNION ALL
            (SELECT * FROM products WHERE category = 'pants' AND specialtag @> $1 LIMIT 6)
            UNION ALL
            (SELECT * FROM products WHERE category = 'sweatshirt' AND specialtag @> $1 LIMIT 6)
        `;
        
        const result = await (conn as Pool).query(query, ['{"news"}']);

        const resData: PageCarouselSection[] = [
            {
                title: 'New Shoes',
                titleHref: '/news/shoes',
                items: result.rows.filter(product => product.category === 'shoes')
            },
            {
                title: 'New Pants',
                titleHref: '/news/pants',
                items: result.rows.filter(product => product.category === 'pants')
            },
            {
                title: 'New Hoodies',
                titleHref: '/news/sweatshirt',
                items: result.rows.filter(product => product.category === 'sweatshirt')
            }
        ];

        return resData;
    } catch (error) {
        console.log(error);
        return [];
    }
}
