import { createSlice } from "@reduxjs/toolkit"
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total: 0
    },
    reducers: {
        addCart: (state, action) => {
            return {
                ...state,
                cart: state.cart.concat(action.payload),
                total: state.total + action.payload.precio

            };
        },
        removeCart: (state, action) => {
            const newCart = state.cart.filter(product => product.id_producto !== action.payload.id);            console.log(newCart)
            return {
                ...state,
                cart:newCart,
                total : state.total - action.payload.precio
            }
        }

    }
})
export const { addCart, removeCart } = cartSlice.actions
export default cartSlice.reducer