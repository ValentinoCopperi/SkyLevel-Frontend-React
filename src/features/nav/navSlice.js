import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    navValue : false
}
export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducers:{
        setNav:(state,action)=>{
            state.navValue = action.payload
        },
        appearNavRedux : (state , action) =>{
            state.value = true
        },
        hiddeNav : (state , action) =>{
            state.navValue = false
        },
    }
})
export const stateNav = (state => state.nav.value)
export const { appearNavRedux , hiddeNav , setNav} = navSlice.actions
export default navSlice.reducer