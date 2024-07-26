import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import ShowProducts from '../components/ShowProducts';
import FiltersOptions from '../components/FiltersOptions';
import Carousel from '../components/BannerProductos';
import { useSelector } from 'react-redux'
import { stateNav } from '../features/nav/navSlice'
import { ProductsContext } from './../context/ProductsContext';



export default function Products() {
  const { productos, showAll, worldFilter, searchWorld } = useContext(ProductsContext)

  const stateNavNow = useSelector(stateNav)
  const [helloFilter, setHelloFilter] = useState(false)
  const [inputValue, setInputValue] = useState('Buscar...')
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [categorias, setCategorias] = useState([])
  const [marcas, setMarcas] = useState([])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  useEffect(() => {

    function getCategorias() {
      fetch('https://api-4-ai9l.onrender.com/api/category')
        .then(res => {
          // Verifica si la respuesta fue exitosa
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          // Convierte la respuesta en JSON
          return res.json();
        })
        .then(data => {
          // Aquí tienes acceso a la data que obtuviste del servidor
          console.log(data);
          setCategorias(data.data)
        })
        .catch(err => {
          // Maneja errores, si los hay
          console.error('There has been a problem with your fetch operation:', err);
        });
    }
    function getMarcas() {
      fetch('https://api-4-ai9l.onrender.com/api/brands')
        .then(res => {
          // Verifica si la respuesta fue exitosa
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          // Convierte la respuesta en JSON
          return res.json();
        })
        .then(data => {
          // Aquí tienes acceso a la data que obtuviste del servidor
          console.log(data);
          setMarcas(data.data)
        })
        .catch(err => {
          // Maneja errores, si los hay
          console.error('There has been a problem with your fetch operation:', err);
        });

    }

    getCategorias()
    getMarcas()
  }, [])



  const setFilter = (categoria, marca) => {

    const productsFilter = productos.filter((prod) => prod.brand_name == marca && prod.category_name == categoria)
    if (productsFilter.length) {
      setProductosFiltrados(productsFilter)
    } else {
      setProductosFiltrados(1)
    }
  }

 



  return (
    <div>
      <Navbar  ></Navbar>
      <section className={`${stateNavNow ? 'hidden' : ''} h-auto bg-black`}>

        {/* PRODUCTOS HEADER */}
        <section className=' grid content-center text-center  h-auto' style={{ paddingTop: '90px', backgroundAttachment: 'fixed', backgroundImage: 'url(/img/bg-contact.png)', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh' }}>
          <h1 className='text-4xl text-white font-bold md:text-7xl'>EXPLORAR PRODUCTOS</h1>
          <i className="fa-solid fa-arrow-down fa-2xl" style={{ color: 'violet', textAlign: 'center', paddingTop: '70px' }}></i>
        </section>

        {/* BANNER PRODUCTOS */}

        <Carousel />

        <div className='lg:flex'>
          {/* FILTERS */}
          <div style={{ background: '#3e3e3e', position: 'relative' }} className='lg:w-[15%]  lg:py-0 lg:border-t lg:border-white'>
            <button style={{ border: '1px solid white', padding: '5px' }} className='w-full lg:hidden' onClick={() => {
              setHelloFilter(true)
            }}>
              <i className="fa-solid fa-filter text-white">FILTER</i>
            </button>
            <div className=
              {`  
            ${helloFilter ? 'max-[1024px]:transform max-[1024px]:translate-0' : 'max-[1024px]:transform max-[1024px]:translate-x-full'}
            max-[1024px]:overflow-y-auto z-20 overflow-hidden transition-transform duration-1000 ease-in-out w-full h-full fixed bg-black text-center top-0 right-0
            lg:transition-none lg:static lg:h-full lg:w-full lg:inset-0 lg:overflow-hidden lg:transform lg:translate-0 lg:bg-black lg:bg-[#3e3e3e] lg:border-r lg:border-white
          `}>
              <button onClick={() => setHelloFilter(false)} className='float-right m-4 lg:hidden'>
                <i className="fa-solid fa-x fa-xl" style={{ color: '#fff' }}></i>
              </button>
              <div className='pt-20 lg:hidden '>
                <h1 className='text-orange-600 text-2xl'>Buscar Producto</h1>
                <div className='flex justify-center'>
                  <input type="text" onChange={(e) => worldFilter(e)} value={searchWorld} className='w-[80%] bg-slate-600 p-3 rounded-2xl hover:bg-slate-400' placeholder='Buscar...' />

                </div>
                <button onClick={showAll} className='underline text-white mt-10'>
                  Ver Todos
                </button>
              </div>
              <h1 className='hidden lg:block lg:text-center lg:text-orange-600 lg:text-1xl'>FILTRAR PRODUCTOS</h1>
              <FiltersOptions marcas={marcas} categorias={categorias} setFilter={setFilter}></FiltersOptions>
            </div>
          </div>

          {/* SECCION PRODUCTOS */}
          <section className=' w-full bg-black bg-[#3e3e3e] lg:border-t lg:w-[85%]'>
            <div className='pt-20 hidden lg:block lg:flex lg:flex-col'>
              <h1 className='text-orange-600 text-2xl lg:text-center'>Buscar Productos</h1>
              <div className='flex justify-center'>
                <input type="text" value={searchWorld} onChange={(e) => worldFilter(e)} className='w-[80%] bg-slate-600 p-3 rounded-2xl hover:bg-slate-400' placeholder='Buscar...' />

              </div>
              <button onClick={showAll} className='underline text-white mt-10'>
                Ver Todos
              </button>
            </div>
            <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center w-full'>
              <ShowProducts products={productosFiltrados.length ? productosFiltrados : productos}></ShowProducts>
            </div>
          </section>
        </div>

      </section>
      <Footer></Footer>
    </div>
  )
}
