import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { getDerivedCart } from '../../utils/getDerivedCart.js'
import { getTotalCart } from '../../utils/getTotalCart.js'
export default function CartSummary() {
    const[derivedCart,setDerivedCart] = useState([])
    const { cart, deleteProductCart} = useCart()
    
    useEffect(()=>{
        const derivedCartNew = getDerivedCart(cart)
        setDerivedCart(derivedCartNew)
    },[cart])
   console.log(derivedCart)
    return (
        <div className='min-h-[80%] overflow-y-auto'>
            {cart.length >= 1
                ?
                <div className='w-full'>
                    {
                        derivedCart.map((item,idx) => {
                            return <article className='w-full flex items-center border-b' key={item.id_producto}>
                                <div className='w-3/4 flex items-center'>
                                    <img src={`/productos/${item.img}.png`} alt={item.producto} className='w-[30%]'/>
                                    <div className='text-left text-white'>
                                        <h1 className='font-semibold'>{item.producto}</h1>
                                        <h5>Subtotal: ${item.totalPrice}</h5>
                                    </div>
                                </div>
                                <div className='w-1/4 flex items-center'>
                                    <button onClick={()=>deleteProductCart(item,idx)}>
                                        <i className="fa-solid fa-minus  fa-2xl text-white"></i>
                                    </button>
                                    <h1 className='border-2 p-3 ml-1 rounded-sm text-white font-extrabold'>{item.cantidad}</h1>
                                </div>
                            </article>
                        })
                    }
                </div>
                : <p className='text-white'>No hay productos en tu carrito!</p>
            }
        </div>
    )
}
