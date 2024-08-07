import React , {useState,createContext,useContext, useEffect} from 'react'
import { getDerivedCart } from '../../utils/getDerivedCart.js'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const[cart,setCart] = useState([])
    const[total,setTotal] = useState(0)
    const[derivedCart,setDerivedCart] = useState()
   
   

    const addCart = (product) => {
        setCart(prev=>[...prev,product])
        setTotal((prev)=>prev+product.price)
    }
    const removeCart = (id,price) => {
        setCart(cart.filter((prod)=> prod.id_product !== id_product))
        setTotal((prev)=> prev - price)
    }
    
    const deleteProductCart = (prod,idx) => {
        const newCart = [...cart]
        var index = newCart.map(producto => producto.id_product).indexOf(prod.id_product)
        newCart.splice(index,1)
        setCart(newCart)
    }

    useEffect(()=>{
        setDerivedCart(getDerivedCart(cart))
    },[cart])
    return (
        <CartContext.Provider value={{cart,total,addCart,deleteProductCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}