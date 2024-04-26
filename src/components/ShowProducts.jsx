import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext'

export default function ShowProducts({ products }) {
  const {productos,maxPrice,productosFiltrados} = useContext(ProductsContext)
  const[hoveredIndex,setHoveredIndex] = useState(null)

  
  if(productos.length <= 1){
    return <h1 className='text-orange-600 text-2xl'>Productos no encontrados :& </h1>
  }else{
    return (productosFiltrados.length >= 1 ?productosFiltrados:productos).filter((prod)=>prod.precio <= maxPrice)
      .map((prod,index) => {
      return <article key={prod.id_producto} className='cursor-pointer p-10 rounded-xl mx-auto my-5  md:m-8 hover:bg-black' style={{ boxShadow: '1px 2px 15px 6px rgba(207,90,0,0.42)' , transition:'.5s ease-in-out'}}
            onMouseOver={()=>setHoveredIndex(index)} onMouseOut={()=>setHoveredIndex(null)}
      >
        <div className='h-full flex flex-col items-center justify-center'>
          <img src={hoveredIndex === index ? `productos/${prod.imagen_2}.png` : `productos/${prod.imagen_1}.png`} alt="" className='w-[220px]' />
          <h1 className='text-white'>{prod.producto}</h1>
          <h5 className='text-orange-400'>{prod.marca} - {prod.categoria}</h5>
          <div className='flex items-center mt-3'>
            <h5 className='text-zinc-500 border p-1 hover:text-orange-400'>
              <Link to={`/products/${prod.id_producto}`}>Descubre Mas</Link>
            </h5>
            <h5 className='text-2xl font-extrabold p-1 ml-4  text-orange-400'>
              ${prod.precio}
            </h5>
          </div>
        </div>
  
      </article>
  
  
    })
  }
}
