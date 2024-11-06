'use client'
import { newProducts, ProductCardData } from "@/lib/constants"
import { createContext, useContext, useState } from "react"


type Context = {
    data: ProductCardData[],
    setData: (state: ProductCardData[]) => void
}

const defaultData = {
    data: [],
    setData: () => {}
}

export const ProductsContext = createContext<Context>(defaultData)

export const ProductsProvider = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    
    const [data, setData] = useState(newProducts)

    return (
        <ProductsContext.Provider value={{data, setData}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}