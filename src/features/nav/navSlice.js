import { createSlice } from "@reduxjs/toolkit"

export const navSlice = createSlice({
    name:'nav',
    initialState:{
        value:false
    },
    reducers:{
        appearNavRedux : (state , action) =>{
            state.value = true
            console.log(state.value)
        },
        hiddeNav : (state , action) =>{
            state.value = false
        },
    }
})
export const stateNav = (state => state.nav.value)
export const { appearNavRedux , hiddeNav } = navSlice.actions
export default navSlice.reducer