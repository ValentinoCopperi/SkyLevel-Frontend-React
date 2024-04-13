import {configureStore} from '@reduxjs/toolkit'
import { navSlice } from '../features/nav/navSlice'
import {mobileSlice} from '../features/mobile/mobileSlice'
export const store = configureStore({
   reducer : {
        nav : navSlice.reducer,
        mobile : mobileSlice.reducer
   }
})