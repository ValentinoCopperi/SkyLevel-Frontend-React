import React, { createContext, useEffect, useState } from 'react'
import getAllProducts from '../../utils/products'

export const ProductsContext = createContext()

export default function ProductsContextProvider({ children }) {

    const [productos, setProducts] = useState([])
    const [sortMax, setSortMax] = useState(false)
    const [maxPrice, setMaxPrice] = useState(1000)
    const[productosFiltrados ,setProductosFiltrados] = useState([])
    const handleSort = () => {
        if (sortMax) {
            const sortedProducts = productos.toSorted((a, b) => a.precio - b.precio)
            setProducts(sortedProducts)
        } else {
            const sortedProducts = productos.toSorted((a, b) => b.precio - a.precio)
            setProducts(sortedProducts)
        }
        setSortMax(!sortMax)
    }

    const showAll = () => {
       
    }

    const handleFilter = (categoria, marca) => {
        const productsFilter = productos.filter((prod) => prod.marca == marca && prod.categoria == categoria)
        if (productsFilter.length) {
            setProductosFiltrados(productsFilter)
        }else{
            setProductosFiltrados([])
        }
    }

    const handleMaxPrice = (value) => setMaxPrice(value)

    const getProductById = async (id) => {
        const producto = productos.find(prod => prod.id_producto == id)
        return producto
    }
    const getProducts = async () => {
        try {
            const data = await getAllProducts()
            if (data.error) {

            } else {
                setProducts(data.products)
            }

        } catch (error) {

        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ProductsContext.Provider
            value={{showAll, productos,productosFiltrados,handleFilter ,handleSort, sortMax, getProducts, handleMaxPrice, maxPrice, getProductById }}
        >
            {children}
        </ProductsContext.Provider>
    )
}
