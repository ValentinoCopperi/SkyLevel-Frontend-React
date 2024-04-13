import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function ShowProducts({ products }) {
  const[hoveredIndex,setHoveredIndex] = useState(null)
  if(products.length == 0){
    return <h1 className='text-orange-600 text-2xl'>Productos no encontrados :& </h1>
  }else{
    return products.map((prod,index) => {
      return <article key={prod.id_producto} className='cursor-pointer p-10 bg-[#202020] mx-auto my-5  md:m-8 hover:bg-black' style={{ boxShadow: '1px 2px 15px 6px rgba(207,90,0,0.42)' , transition:'.5s ease-in-out'}}
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
            <h5 className='text-zinc-500 border p-1 ml-4  hover:text-orange-400'>
              <Link>Comprar</Link>
            </h5>
          </div>
        </div>
  
      </article>
  
  
    })
  }
}
