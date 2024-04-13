import { createSlice } from "@reduxjs/toolkit"

export const mobileSlice = createSlice({
    name:'mobile',
    initialState:{
        value:null
    },
    reducers:{
        setMobile : (state , action) =>{
            action.payload ? state.value = true : state.value = false
        }
       
    }
})
export const stateMobile = (state => state.mobile.value)
export const { setMobile } = mobileSlice.actions
export default mobileSlice.reducer