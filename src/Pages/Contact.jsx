import React from 'react'
import Navbar from '../components/Nav'
import {useSelector  , useDispatch} from 'react-redux'
import { appearNavRedux , hiddeNav  , stateNav} from '../features/nav/navSlice'

 import Footer from '../components/Footer'

export default function Home() {
  
  const stateNavNow = useSelector(stateNav)
  const dispatch = useDispatch()

  
  return (
    <section>
      <Navbar ></Navbar>
      <section style={{background:' rgb(0,0,0) linear-gradient(180deg, rgba(0,0,0,1) 68%, rgba(89,89,89,1) 100%)'}} className='bg-black pt-[20vh] lg:flex lg:pb-[10vh] lg:justify-evenly'>
          <div className='max-[600px]:w-[80%] m-auto bg-white lg:w-[50%] lg:m-0'>
            <form className='flex flex-col items-center justify-center py-5 rounded-md'>
              <h1 className='text-2xl py-5 text-orange-500'>CONTACTENOS</h1>
              <div className='flex flex-col w-[92%] mx-auto'>
                <label htmlFor="name">Name</label>
                <input type="text" name="text" placeholder='Enter yourn Name'className='border-b border-orange-500' />
              </div>
              <div className='flex flex-col w-[92%] mx-auto my-8'>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder='Enter a valid email adress'className='border-b border-orange-500' />
              </div>
              <div className='flex flex-col w-[92%] mx-auto'>
                <label htmlFor="message">Message</label>
                <input type="text" name="message" placeholder=''className='border-b border-orange-500 h-[100px]' />
              </div>
              <div className='flex my-3'>
                <input type="checkbox" name="terms" id="" required/>
                <h5>I accept the <span className='text-cyan-400'>Terms of Service</span></h5>
              </div>
              <button className='w-[90%] mx-auto text-white bg-orange-500 py-3 rounded-md'>ENTREGAR</button>
            </form>
          </div>
          <div className='flex flex-col items-center justify-center text-center py-10'>
            <div className='flex flex-col'>
              <h1 className='text-orange-500 text-1xl mx-5 lg:text-2xl'>LLAMANOS</h1>
              <p className='text-white'>+42 4242 523</p>
              <p className='text-white'>+42 4241 341</p>
            </div>
            <div className='flex flex-col my-10'>
              <h1 className='text-orange-500 text-1xl mx-5 lg:text-2xl'>LOCALIZACION</h1>
              <p className='text-white'>121 Rock Street, 21 Avenue,</p>
              <p className='text-white'>Nueva York, NY 92103-9000</p>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-orange-500 text-1xl mx-5 lg:text-2xl'>NUESTROS MEJORES SERVICIOS</h1>
              <p className='text-white'>Autoaprendizaje</p>
              <p className='text-white'>Cursos en línea</p>
              <p className='text-white'>Desafíate a ti mismo</p>
            </div>
          </div>
      </section>
      <Footer></Footer>
    </section>
  )
}
