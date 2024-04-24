import {configureStore} from '@reduxjs/toolkit'
import { navSlice } from '../features/nav/navSlice'
import {mobileSlice} from '../features/mobile/mobileSlice'
import {userSlice} from '../features/user/userSlice'
import {cartSlice} from '../features/cart/cartSlice'
export const store = configureStore({
   reducer : {
        nav : navSlice.reducer,
        mobile : mobileSlice.reducer,
        user : userSlice.reducer,
        cart : cartSlice.reducer
   }
})