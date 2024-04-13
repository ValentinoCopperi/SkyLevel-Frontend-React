import React from 'react'

export default function BannerProductos() {
  return (
    <section className='flex flex-col items-center justify-center lg:block  bg-black py-40'>

          <article className=' max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:justify-center h-2/3 flex flex-col justify-center items-center text-center'>
            <h1 className='max-[600px]:text-[2rem] text-center text-orange-600 text-5xl 2xl:text-6xl' style={{ fontFamily: 'unset' }}>Nuevas Tarjetas Madres</h1>
            <div className=' max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:justify-center flex justify-around mt-10 2xl:mt-20'>
              <div className='max-[600px]:w-3/4 flex flex-col items-center w-1/3'>
                <img src="img/motherPresentation1.webp" alt="" className='cursor-pointer w-3/4 2xl:w-[90%] 2xl:hover:w-[100%] transition-all duration-1000 hover:w-[80%] hover:shadow-lg hover:bg-zinc-800' />
                <h5 className='text-orange-700'>AOURUS GAMING</h5>
              </div>
              <div className='max-[600px]:w-3/4 flex flex-col items-center  w-1/3 2xl:mx-[100px]'>
                <img src="img/motherPresentation2.webp" alt="" className='cursor-pointer w-3/4 2xl:w-[90%] 2xl:hover:w-[100%] transition-all duration-1000 hover:w-[80%] hover:shadow-lg hover:bg-zinc-800' />
                <h5 className='text-orange-700'>AOURUS GAMING</h5>
              </div>
              <div className='max-[600px]:w-3/4 flex flex-col items-center  w-1/3'>
                <img src="img/motherPresentation3.webp" alt="" className='cursor-pointer w-3/4 2xl:w-[90%] 2xl:hover:w-[100%] transition-all duration-1000 hover:w-[80%] hover:shadow-lg hover:bg-zinc-800' />
                <h5 className='text-orange-700'>AOURUS GAMING</h5>
              </div>

            </div>
          </article>

    </section>
  )
}
