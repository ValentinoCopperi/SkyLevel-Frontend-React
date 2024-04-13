import { useState , useEffect } from "react"
import { Route , Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import Login from "./Pages/Login"
function App() {
  

  return (
    
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
  )
}

export default App
