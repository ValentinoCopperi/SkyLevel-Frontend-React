import React , {useState,createContext,useContext} from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const[cart,setCart] = useState([])
    const[total,setTotal] = useState(0)
    const addCart = (product) => {
        setCart([...cart,product])
        setTotal((prev)=>prev+product.precio)
    }
    const removeCart = (id,price) => {
        setCart(cart.filter((prod)=> prod.id !== id))
        setTotal((prev)=> prev - price)
    }

    return (
        <CartContext.Provider value={{cart,total,addCart,removeCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}