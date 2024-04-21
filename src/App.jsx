import { useState, useEffect } from "react"
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import Login from "./Pages/Login"
import PanelAdmin from "./Pages/PanelAdmin"
import Context from "./context"
import { useDispatch, useSelector } from "react-redux"
import { setUserDetails } from "./features/user/userSlice"
import { useNavigate } from "react-router-dom"
import AllUsers from "./components/AllUsers"

function App() {
  const navigate = useNavigate()
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const fetchUserDetails = async () => {
    const dataResponse = await fetch('http://localhost:3000/user-details', {
      method: 'get',
      credentials: 'include'
    })

    const dataApi = await dataResponse.json()

    if (dataApi.success) {
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
            <Route path="/panel-admin" element={user?.id === 115 ? <PanelAdmin /> : <Home></Home>}>
              <Route index element={<AllUsers />}></Route>
              <Route path="all-users" element={<AllUsers />} />
              <Route path="product" element={<AllUsers />} />
            </Route>
          </Routes>
        </div>
      </Context.Provider>
    </>
  )
}

export default App
