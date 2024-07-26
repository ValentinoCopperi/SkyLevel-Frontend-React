import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <section className='flex flex-col items-center justify-center lg:block  bg-black py-40' style={{
      background:' rgb(0,0,0) linear-gradient(180deg, rgba(0,0,0,1) 31%, rgba(37,0,54,1) 49%, rgba(0,0,0,1) 73%)'

    }}>

      <article className='max-[700px]:w-[80%] w-[90%] mx-auto '  >      
      <Slider {...settings}>
          <div className='flex flex-col items-center justify-center' >
            <h1 className='text-4xl text-orange-500 text-center' style={{fontFamily:'serif',fontSize:'bolder'}}>MONITORES</h1>
            <div className='flex items-center justify-center py-5'>
              <div className='flex flex-col items-center justify-center'>
               <img src="productos/Monitors-AORUS-FO32.png" alt="Imagen 1" className='w-[90%] drop-shadow-md hover:drop-shadow-2xl'/>
               <h5 className='text-white text-center'>RXT-540</h5>
              </div>
              <div className='flex flex-col items-center justify-center'>
               <img src="productos/Monitors-AORUS-FO32(1).png" alt="Imagen 1"className='w-[90%] drop-shadow-[13px_1px_13px_#000000]'/>
               <h5 className='text-white text-center'>RXT-540</h5>
              </div>
              <div className='flex flex-col items-center justify-center'>
               <img src="productos/Monitors-AORUS-FO32(2).png" alt="Imagen 1"className='w-[90%] drop-shadow-md hover:drop-shadow-2xl' />
               <h5 className='text-white text-center'>RXT-540</h5>
              </div>              
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-orange-500 text-center' style={{fontFamily:'serif',fontSize:'bolder'}}>PC ARMADAS</h1>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center'>
               <img src="productos/Pc-EAGLE-X.png" alt="Imagen 1" className='w-[90%]'style={{filter:'drop-shadow(4px 6px 12px black)'}}/>
               <h5 className='text-white text-center'>RXT-540</h5>
              </div>
              <div className='flex flex-col items-center justify-center'>
               <img src="productos/Pc-EAGLE-X(1).png" alt="Imagen 1" className='w-[90%]'style={{filter:'drop-shadow(4px 6px 12px black)'}}/>
               <h5 className='text-white text-center'>RXT-540</h5>
              </div>
              <div className='flex flex-col items-center justify-center'>
               <img src="productos/Pc-EAGLE-X(2).png" alt="Imagen 1"className='w-[90%]'style={{filter:'drop-shadow(4px 6px 12px black)'}} />
               <h5 className='text-white text-center'>RXT-540</h5>
              </div>              
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-orange-500 text-center' style={{fontFamily:'serif',fontSize:'bolder'}}>LAPTOPS</h1>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center'>
               <img src="productos/Laptops-GIGABYTE-A7.png" alt="Imagen 1" className='w-[70%] drop-shadow-2xl'  />
               <h5 className='text-white text-center'>RXT-540</h5>
              </div>
              <div className='flex flex-col items-center justify-center'>
               <img src="productos/Laptops-AERO-16OLDED.png" alt="Imagen 1" className='w-[70%] drop-shadow-[13px_1px_13px_#000000]' />
               <h5 className='text-white text-center'>RXT-540</h5>
              </div>
              <div className='flex flex-col items-center justify-center'>
               <img src="productos/Laptops-GIGABYTE-A7(2).png" alt="Imagen 1" className='w-[70%] drop-shadow-[13px_1px_13px_#000000]'/>
               <h5 className='text-white text-center'>RXT-540</h5>
              </div>              
            </div>
          </div>
         
        </Slider>
      </article>

    </section>

  )
}
