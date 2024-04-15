import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import Login from "./Pages/Login"
import Context from "./context"
import { useDispatch, useSelector } from "react-redux"
import { setUserDetails } from "./features/user/userSlice"
function App() {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const fetchUserDetails = async () => {
    const dataResponse = await fetch('http://localhost:3000/user-details', {
      method: 'get',
      credentials: 'include'
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
  }
  useEffect(() => {
    /*User <details></details>*/
    fetchUserDetails()
  }, [])
  return (
    <>
      <Context.Provider value={{
        fetchUserDetails // user detail fetch
      }}>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home  ></Home>}></Route>
            <Route path="/home" element={<Home  ></Home>}></Route>
            <Route path="/products" element={<Products ></Products>}></Route>
            <Route path="/products/:id" element={<Product></Product>}></Route>
            <Route path="/contact" element={<Contact ></Contact>}></Route>
            <Route path="/login" element={<Login ></Login>}></Route>
          </Routes>
        </div>
      </Context.Provider>
    </>
  )
}

export default App
