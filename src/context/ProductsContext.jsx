import React, { createContext, useEffect, useState } from 'react'
import getAllProducts from '../../utils/products'

export const ProductsContext = createContext()

export default function ProductsContextProvider({ children }) {

    const [productos, setProducts] = useState([])
    const [sortMax, setSortMax] = useState(false)
    const [maxPrice, setMaxPrice] = useState(200)
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const[searchWorld , setSearchWorld] = useState('')
    const handleSort = () => {
        if (productosFiltrados.length >= 1) {
            if (sortMax) {
                const sortedProducts = productosFiltrados.toSorted((a, b) => a.price - b.price)
                setProductosFiltrados(sortedProducts)
            } else {
                const sortedProducts = productosFiltrados.toSorted((a, b) => b.price - a.price)
                setProductosFiltrados(sortedProducts)
            }
        } else {
            if (sortMax) {
                const sortedProducts = productos.toSorted((a, b) => a.price - b.price)
                setProducts(sortedProducts)
            } else {
                const sortedProducts = productos.toSorted((a, b) => b.price - a.price)
                setProducts(sortedProducts)
            }
        }
        setSortMax(!sortMax)
    }



    const worldFilter = (e) => {
        setSearchWorld(e.target.value)
       
        if (searchWorld.length <= 1) {
            setProductosFiltrados(productos)
        } else {
            const productsFilter = productos.filter(prod => {
                return prod.name.toLowerCase().includes(searchWorld.toLowerCase())
                    ||
                    prod.brand_name.toLowerCase().includes(searchWorld.toLowerCase())
                    ||
                    prod.category_name.toLowerCase().includes(searchWorld.toLowerCase())
            })
            setProductosFiltrados(productsFilter)
        }
    }
    const showAll = () => {
        setProductosFiltrados([])
        setSearchWorld('')
        setMaxPrice(1000)
    }
    const handleFilter = (categoria, marca) => {
        const productsFilter = productos.filter((prod) => prod.brand_name == marca && prod.category_name == categoria)
        if (productsFilter.length) {
            setProductosFiltrados(productsFilter)
        } else {
            setProductosFiltrados([])
        }
    }

    const handleMaxPrice = (value) => setMaxPrice(value)

    const getProductById = async (id) => {
        console.log(productos)
        const producto = productos.find(prod => prod.id_product == id)
        return producto
    }
    const getProducts = async () => {
        try {
            const data = await getAllProducts()
            
            if (data.error) {
                //AVISAR DEL ERROR



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
            value={{ searchWorld,showAll, productos, productosFiltrados, handleFilter, handleSort, sortMax, getProducts, handleMaxPrice, maxPrice, getProductById, worldFilter }}
        >
            {children}
        </ProductsContext.Provider>
    )
}
