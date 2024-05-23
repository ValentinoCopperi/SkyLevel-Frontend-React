import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: localStorage.getItem('cartState') ? JSON.parse(localStorage.getItem('cartState')) : [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.total += action.payload.precio
            const producto = {
                id  : action.payload.id_producto,
                producto : action.payload.producto,
                datos : action.payload.datos,
                marca : action.payload.marca,
                precio : action.payload.precio,
                subtotal : state.total
            }
            state.cart.push(producto)
           localStorage.setItem('cartState' , JSON.stringify(state.cart))

        },
        removeCart: (state, action) => {
            console.log(action.payload.index)
           state.cart.splice(action.payload.index,1)
           localStorage.setItem('cartState' , JSON.stringify(state.cart))
            // return {
            //     ...state,
            //     cart:newCart,
            //     total : state.total - action.payload.precio
            // }
        }

    }
})
export const { addCart, removeCart } = cartSlice.actions
export default cartSlice.reducer