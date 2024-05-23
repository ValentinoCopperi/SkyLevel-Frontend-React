import React, { createContext, useEffect, useState } from 'react'
import getAllProducts from '../../utils/products'

export const ProductsContext = createContext()

export default function ProductsContextProvider({ children }) {

    const [productos, setProducts] = useState([])
    const [sortMax, setSortMax] = useState(false)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const[searchWorld , setSearchWorld] = useState('')
    const handleSort = () => {
        if (productosFiltrados.length >= 1) {
            if (sortMax) {
                const sortedProducts = productosFiltrados.toSorted((a, b) => a.precio - b.precio)
                setProductosFiltrados(sortedProducts)
            } else {
                const sortedProducts = productosFiltrados.toSorted((a, b) => b.precio - a.precio)
                setProductosFiltrados(sortedProducts)
            }
        } else {
            if (sortMax) {
                const sortedProducts = productos.toSorted((a, b) => a.precio - b.precio)
                setProducts(sortedProducts)
            } else {
                const sortedProducts = productos.toSorted((a, b) => b.precio - a.precio)
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
                return prod.producto.toLowerCase().includes(searchWorld.toLowerCase())
                    ||
                    prod.marca.toLowerCase().includes(searchWorld.toLowerCase())
                    ||
                    prod.categoria.toLowerCase().includes(searchWorld.toLowerCase())
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
        const productsFilter = productos.filter((prod) => prod.marca == marca && prod.categoria == categoria)
        if (productsFilter.length) {
            setProductosFiltrados(productsFilter)
        } else {
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
            value={{ searchWorld,showAll, productos, productosFiltrados, handleFilter, handleSort, sortMax, getProducts, handleMaxPrice, maxPrice, getProductById, worldFilter }}
        >
            {children}
        </ProductsContext.Provider>
    )
}
