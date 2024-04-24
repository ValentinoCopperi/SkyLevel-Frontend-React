import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { motion, AnimatePresence } from 'framer-motion'
import { addCart,removeCart } from '../features/cart/cartSlice'
import ShowProducts from './../components/ShowProducts';
import { ToastContainer , toast } from 'react-toastify'
export default function Product() {
  const user = useSelector(state => state?.user?.user)
  const cart = useSelector(state => state?.cart?.cart)
  const total = useSelector(state => state?.cart?.total)
  const dispatch = useDispatch()
  let { id } = useParams()

  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([])
  const [mainImage, setMainImage] = useState()
  const [noticeLogin,setNoticeLogin] = useState(null)
  useEffect(() => {
    function getProducts() {
      fetch('http://localhost:3000/productos')
        .then(res => res.json())
        .then(data => setProducts(data))
    }
    const getProduct = () => {
      fetch(`http://localhost:3000/productos/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data[0])
          setMainImage(data[0].imagen_1)
        })
    }
    getProducts()
    getProduct()
  }, [id])
  
  const handleMainImage = (e) => {

    setMainImage(e.target.parentElement.value)
  }

  const relatedProducts = products.filter((prod)=>{
    if(prod.id_producto != id){
      return prod.categoria == product.categoria || prod.marca == product.marca
    }
  })

  const handleAddCart = (prod) => {
    dispatch(addCart(prod))
    //showToastMessage(prod.producto)
  }
  const showToastMessage = (product) => {
    toast(product +" agregado al carrito!")
  }
  return (
    <section style={{ background: 'rgb(0,0,0) linear-gradient(170deg, rgba(0,0,0,1) 24%, rgba(78,0,103,1) 95%)' }}>
      <Navbar></Navbar>
      <ToastContainer className='fixed top-0 right-0 bg-white p-10'/>
      {/* CONTENEDOR PRODUCTO SELECCIONADO + PRODUCTOS RELACIONADOS */}
      <div className='pt-[20vh] pb-[10vh] w-[90%] mx-auto'>
        {/* SECCION PRODUCTO SELECCIONADO */}
        <section className='max-[700px]:flex-col
        flex items-center border-b-4 border-white shadow-lg shadow-violet-500/50'>
          {/* DATOS PRODUCTO SELECCIONADO */}
          <article className='max-[700px]:py-2
          py-[300px] flex flex-col items-center justify-center text-white px-6 text-center bg-[#202020] h-[430px] md:w-1/2'>
            <h1 className='text-orange-400 text-3xl'>{product.producto}</h1>
            <p className='my-5'>{product.datos}</p>
            <div className='flex'>
              <h5 className='text-red-600 text-2xl'>${product.precio}.00</h5>
              <h5 className='text-orange-100 bg-orange-700 ml-4  rounded-md p-1  hover:bg-orange-600 hover:text-orange-200'>
                <motion.div onClick={()=>{user ? handleAddCart(product) : setNoticeLogin(true)}}>
                  Comprar
                </motion.div>
              </h5>
            </div>
            <div>
              <AnimatePresence>
                {noticeLogin &&
                  <div className='py-4'>
                    <motion.div>
                      <motion.h1 className='text-red-400 text-1xl'>
                        You must be logged in to buy products!
                      </motion.h1>
                      <motion.button className='bg-orange-600 p-2 text-white rounded-lg'>
                        <Link to='/login'>
                          LOGIN
                        </Link>
                      </motion.button>
                    </motion.div>
                    
                  </div>
                }
              </AnimatePresence>
            </div>
          </article>
          {/* IMAGENES PRODUCTO SELECCIONADO */}
          <article className='max-[700px]:py-1 max-[700px]:pb-10 max-[700px]:flex-col max-[700px]:h-auto 
            py-[300px]  flex items-center justify-center bg-[#202020] h-[430px] lg:w-1/2'>
            <img src={`/productos/${mainImage}.png`} alt="" className='w-[90%] lg:w-1/2' />
            <div className='flex flex-row w-[96%]
              lg:flex lg:flex-col lg:w-1/3 '>
              <button className='border border-white mx-auto w-1/3' value={product.imagen_1} onClick={handleMainImage}>
                <img src={`/productos/${product.imagen_1}.png`} alt="" />
              </button>
              <button className='border border-white mx-auto w-1/3' value={product.imagen_2} onClick={handleMainImage}>
                <img src={`/productos/${product.imagen_2}.png`} alt="" />
              </button>
              <button className='border border-white mx-auto w-1/3' value={product.imagen_3} onClick={handleMainImage}>
                <img src={`/productos/${product.imagen_3}.png`} alt="" />
              </button>
            </div>
          </article>
        </section>

        {/* SECCION PRODUCTOS RELACIONADOS */}
        <section className='bg-[#202020]'>
            <h1 className='text-white text-center text-3xl py-5'>Productos Relacionados:</h1>
            <div className=' max-[700px]:flex-col
              flex flex-wrap items-center justify-center'>
                {
                  relatedProducts.length ? 
                  relatedProducts.map((prod) => {
                    return <article key={prod.id_producto} className=' w-[35%] m-3 cursor-pointer p-10 bg-[#18181a]  hover:bg-black lg:w-1/3 lg:m-5' style={{boxShadow: '1px 2px 15px 6px rgba(207,90,0,0.42)' , transition:'.5s ease-in-out'}}>
                      <div className='h-full flex flex-col items-center justify-center'>
                        <img src={`/productos/${prod.imagen_1}.png`} alt="" className='w-[220px]' />
                        <h1 className='text-white'>{prod.producto}</h1>
                        <h5 className='text-orange-400'>{prod.marca} - {prod.categoria}</h5>
                        <div className='flex items-center mt-3'>
                          <h5 className='text-zinc-500 border p-1 text-center hover:text-orange-400'>
                            <Link to={`/products/${prod.id_producto}`}>Descubre Mas</Link>
                          </h5>
                          <h5 className='text-zinc-500 border p-1 ml-4  hover:text-orange-400'>
                            <button>Comprar</button>
                          </h5>
                        </div>
                      </div>
                
                    </article>
                    })
                  : <h5 className='text-white'>No Hay Productos Relacionados a {product.producto}</h5>
                }
            </div>
        </section>
      </div>
      <Footer></Footer>
    
    </section>
  )
}
