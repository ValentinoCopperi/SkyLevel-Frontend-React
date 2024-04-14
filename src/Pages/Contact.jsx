import React from 'react'
import Navbar from '../components/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { appearNavRedux, hiddeNav, stateNav } from '../features/nav/navSlice'

import Footer from '../components/Footer'

export default function Home() {

  const stateNavNow = useSelector(stateNav)
  const dispatch = useDispatch()


  return (
    <section>
      <Navbar ></Navbar>
      <section style={{ background: 'black' }}
        className='bg-black pt-[14vh] md:pt-[10.5vh] lg:pt-[11vh] xl:pt-[7.5vh]'>
        <div style={{
          backgroundImage: 'url(img/bg-contacto.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} className='min-h-[25vh] lg:min-h-[50vh]'>
          <div className='text-center text-left pt-10 md:pt-5 lg:pt-20 xl:pt-[10%]'>
            <h1 className='text-xl font-black'>Servicio de contacto de SkyLevel</h1>
            <h5 className='underline'>¿Como podemos ayudar?</h5>
          </div>
        </div>
        <div className='bg-white py-10'>
          <h1 className='text-center text-xl py-5 font-black'>Podemos ayudarte con lo siguiente:</h1>
          <div className='flex flex-wrap items-center justify-center'>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3  m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px] lg:m-2'>
              <h1 className='text-center font-black lg:text-2xl'>Cuenta y seguridad</h1>
              <i class="fa-solid fa-user-lock lg:text-3xl"></i>
            </div>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3 m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px]  lg:m-2'>
              <h1 className='text-center font-black lg:text-2xl'>PC</h1>
              <i class="fa-solid fa-laptop lg:text-3xl"></i>
            </div>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3  m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px] lg:m-2'>
              <h1 className='text-center font-black lg:text-2xl'>Pagos y rembolsos</h1>
              <i class="fa-solid fa-credit-card lg:text-3xl"></i>
            </div>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3 m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px] lg:m-2'>
              <h1 className='text-center font-black lg:text-2xl'>Reparaciones</h1>
              <i class="fa-solid fa-wrench lg:text-3xl"></i>
            </div>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3 m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px] lg:m-2 '>
              <h1 className='text-center font-black lg:text-2xl'>Seguridad</h1>
              <i class="fa-solid fa-shield-halved lg:text-3xl"></i>
            </div>
            <div style={{
              border: '1px solid rgba(166,166,166,0.57)',
              boxShadow: ' 0px 1px 22px -4px rgba(71,71,71,1)'
            }}
              className='w-1/3  m-1 p-5 h-[120px] flex flex-col items-center justify-center lg:h-[160px] lg:m-2'>
              <h1 className='text-center font-black lg:text-2xl'>Envios</h1>
              <i class="fa-solid fa-truck lg:text-3xl"></i>
            </div>
          </div>

        </div>

        <section>

          <div style={{background:'#d1d1d1'}}
            className='py-10 lg:flex lg:justify-evenly'
          >
            <div className='max-[600px]:w-[80%] m-auto bg-white lg:w-[50%] lg:m-0'>
              <form className='flex flex-col items-center justify-center py-5 rounded-md'>
                <h1 className='text-2xl py-5 text-orange-500'>CONTACTENOS</h1>
                <div className='flex flex-col w-[92%] mx-auto'>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="text" placeholder='Enter yourn Name' className='border-b border-orange-500' />
                </div>
                <div className='flex flex-col w-[92%] mx-auto my-8'>
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" placeholder='Enter a valid email adress' className='border-b border-orange-500' />
                </div>
                <div className='flex flex-col w-[92%] mx-auto'>
                  <label htmlFor="message">Message</label>
                  <input type="text" name="message" placeholder='' className='border-b border-orange-500 h-[100px]' />
                </div>
                <div className='flex my-3'>
                  <input type="checkbox" name="terms" id="" required />
                  <h5>I accept the <span className='text-cyan-400'>Terms of Service</span></h5>
                </div>
                <button className='w-[90%] mx-auto text-white bg-orange-500 py-3 rounded-md'>ENTREGAR</button>
              </form>
            </div>
            <div className='flex flex-col items-center justify-center text-center py-10'>
              <div className='flex flex-col'>
                <h1 className='text-orange-500 font-black text-1xl mx-5 lg:text-2xl'>LLAMANOS</h1>
                <p className='text-white font-black'>+42 4242 523</p>
                <p className='text-white font-black'>+42 4241 341</p>
              </div>
              <div className='flex flex-col my-10'>
                <h1 className='text-orange-500 font-black text-1xl mx-5 lg:text-2xl'>LOCALIZACION</h1>
                <p className='text-white font-black'>121 Rock Street, 21 Avenue,</p>
                <p className='text-white font-black'>Nueva York, NY 92103-9000</p>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-orange-500 font-black text-1xl mx-5 lg:text-2xl'>NUESTROS MEJORES SERVICIOS</h1>
                <p className='text-white font-black'>Autoaprendizaje</p>
                <p className='text-white font-black'>Cursos en línea</p>
                <p className='text-white font-black'>Desafíate a ti mismo</p>
              </div>
            </div>
          </div>

        </section>
      </section>
      <Footer></Footer>
    </section>
  )
}
