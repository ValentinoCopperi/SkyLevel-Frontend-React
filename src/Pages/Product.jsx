import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import ShowProducts from './../components/ShowProducts';
export default function Product() {
  let { id } = useParams()
  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([])
  const [mainImage, setMainImage] = useState()
  
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
  console.log(relatedProducts)
  return (
    <section style={{ background: 'rgb(0,0,0) linear-gradient(170deg, rgba(0,0,0,1) 24%, rgba(78,0,103,1) 95%)' }}>
      <Navbar></Navbar>
      {/* CONTENEDOR PRODUCTO SELECCIONADO + PRODUCTOS RELACIONADOS */}
      <div className='pt-[20vh] pb-[10vh] w-[90%] mx-auto'>
        {/* SECCION PRODUCTO SELECCIONADO */}
        <section className='flex items-center border-b border-white shadow-lg shadow-violet-500/50'>
          {/* DATOS PRODUCTO SELECCIONADO */}
          <article className='   py-[300px] flex flex-col items-center justify-center text-white  w-1/2 px-6 text-center bg-[#202020] h-[430px]'>
            <h1 className='text-orange-400 text-3xl'>{product.producto}</h1>
            <p className='my-5'>{product.datos}</p>
            <div className='flex'>
              <h5 className='text-red-600 text-2xl'>${product.precio}.00</h5>
              <h5 className='text-orange-100 bg-orange-700 ml-4  rounded-md p-1  hover:bg-orange-600 hover:text-orange-200'>
                <Link>Comprar</Link>
              </h5>
            </div>
          </article>
          {/* IMAGENES PRODUCTO SELECCIONADO */}
          <article className='  py-[300px] w-1/2 flex items-center justify-center bg-[#202020] h-[430px]'>
            <img src={`/productos/${mainImage}.png`} alt="" className='w-1/2' />
            <div className='w-1/3 flex flex-col'>
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
            <div className='flex flex-wrap items-center justify-center'>
                {
                  relatedProducts.length ? 
                  relatedProducts.map((prod) => {
                    return <article key={prod.id_producto} className='cursor-pointer p-10 bg-[#202020] w-1/3 m-5 hover:bg-black' style={{boxShadow: '1px 2px 15px 6px rgba(207,90,0,0.42)' , transition:'.5s ease-in-out'}}>
                      <div className='h-full flex flex-col items-center justify-center'>
                        <img src={`/productos/${prod.imagen_1}.png`} alt="" className='w-[220px]' />
                        <h1 className='text-white'>{prod.producto}</h1>
                        <h5 className='text-orange-400'>{prod.marca} - {prod.categoria}</h5>
                        <div className='flex items-center mt-3'>
                          <h5 className='text-zinc-500 border p-1 hover:text-orange-400'>
                            <Link to={`/products/${prod.id_producto}`}>Descubre Mas</Link>
                          </h5>
                          <h5 className='text-zinc-500 border p-1 ml-4  hover:text-orange-400'>
                            <Link>Comprar</Link>
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
