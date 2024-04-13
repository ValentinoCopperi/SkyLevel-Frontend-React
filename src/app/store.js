import {configureStore} from '@reduxjs/toolkit'
import { navSlice } from '../features/nav/navSlice'
import {mobileSlice} from '../features/mobile/mobileSlice'
import {userSlice} from '../features/user/userSlice'
export const store = configureStore({
   reducer : {
        nav : navSlice.reducer,
        mobile : mobileSlice.reducer,
        user : userSlice.reducer
   }
})