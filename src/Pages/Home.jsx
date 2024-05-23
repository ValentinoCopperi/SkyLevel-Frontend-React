import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import {useSelector  , useDispatch} from 'react-redux'

import Navbar from '../components/Nav'
import Footer from '../components/Footer'

import Lottie from 'react-lottie';
import animationData from '../../public/home-animate.json';

import {  stateNav} from '../features/nav/navSlice'
import {stateMobile } from "../features/mobile/mobileSlice"




export default function Home() {

  const stateNavNow = useSelector(stateNav)
  const stateMobileNow = useSelector(stateMobile)
  const dispatch = useDispatch()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



  return (
    <div className='h-full'>
      <Navbar  ></Navbar>
      <video className={'fixed  w-full h-screen top-0'} style={{ objectFit: 'cover', zIndex: '-5' }} src="/bg-home.mp4" autoPlay loop muted></video>
      <section className={stateNavNow ? 'hidden' : ''}>
        <div className='flex flex-col-reverse items-center w-auto md:flex-row md:justify-evenly md:items-center' style={{ paddingTop: '25vh' }}>
          <div className='flex flex-col items-center max-[500px]:py-[50px]'>
            <h1 style={{
              color: '#A002FF',
              textShadow: '   0 0 2px blueviolet, 0 0 10px blueviolet, 0 0 20px blueviolet, 0 0 40px blueviolet',
              textAlign: 'center',
              fontFamily:'serif'
            }} className='text-5xl'>Sky-Level</h1>
            <h5 className='text-white'>
            </h5>
            <h5 style={{
              color: 'pink',
              border: '1px solid pink',
              padding: '0.5rem',
              marginTop: '10px',
              width: '120px',
              textAlign: 'center'
            }}>
              <Link>
                Shop Now
              </Link>
            </h5>
          </div>
          <div>
            <Lottie
              options={defaultOptions}
              className='w-1/2 lg:w-1/4'
            />
          </div>
        </div>
      </section>
      <section className={stateNavNow ? 'hidden' : ''}>
        <section style={{
          background: 'rgb(21,0,52) linear-gradient(270deg, rgba(21,0,52,1) 0%, rgba(0,0,0,1) 28%)'
          
        }}>
          <div className='py-[100px] px-1 bg-black'>
            <h1 className='text-2xl text-white text-center mb-[20px] md:text-4xl' style={{ fontWeight:'bolder' , fontFamily : 'monospace' }}>
              Presentamos <span className='text-violet-700' style={{fontFamily : 'monospace'}}>Sky-Level</span>
            </h1>
            <p className=' text-center text-white w-full w-3/5 mx-auto md:w-2/4 md:mx-auto'>
              Sky-Level es una empresa líder en tarjetas madre, tarjetas gráficas, laptops, hardware de juegos y sistemas de alto rendimiento. ¡Nos apasiona unirnos a los jugadores para desafiar los límites sin miedo y luchar mientras nos elevamos a la gloria máxima!
            </p>
            <div className='pt-[50px] md:pt-[100px]' style={{ display: 'grid', placeContent: 'center' }}>
              <h1 className='text-pink-400 text-center text-2xl md:text-4xl'>
                Nuestra coleccion de productos
              </h1>
              <i className="fa-solid fa-arrow-down fa-2xl text-pink-400 text-center pt-[30px]"></i>
            </div>
          </div>
          <div>
            <div className='flex flex-col-reverse my-4  items-center lg:flex-row lg:justify-evenly lg:items-center'>
              <img src="/img/pexels-ron-lach-7859350.jpg" alt="" style={{ boxShadow: '1px 1px 8px violet' }} className='w-2/4 h-auto md:w-1/5 md:h-auto'/>
              <div className='max-[500px]:flex max-[500px]:flex-col max-[500px]:items-center'>
                <h1  className='text-purple-500 text-2xl text-center lg:text-7xl md:text-left'>ULTIMA GENERACION</h1>
                <p className='text-white py-[60px] text-center w-3/4 md:text-left md:w-full'>Te invitamos a que experimentes mundos exóticos en los que tu misión es encontrar la solución</p>
                <div style={{
                  color: 'white',
                  background: '#AF00D6',
                  padding: '15px',
                  width: '140px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}>
                  <Link>
                    VER MAS
                  </Link>
                  <Link style={{
                    background: '#5C189C',
                    padding: '1px',
                    borderRadius: '50%  '
                  }}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-[100px]'>
            <div className='flex flex-col-reverse  items-center lg:flex lg:flex-row-reverse lg:justify-evenly lg:items-center'>
              <img src="/img/pexels-cottonbro-studio-4009599.jpg" alt="" style={{ boxShadow: '1px 1px 8px violet' }} className='w-2/4 h-auto md:w-1/5 md:h-auto'/>
              <div className='max-[500px]:flex max-[500px]:flex-col max-[500px]:items-center'>
                <h1  className='text-purple-500 text-2xl text-center lg:text-7xl md:text-left'>ULTIMA GENERACION</h1>
                <p className='text-white py-[60px] text-center w-3/4 md:text-left md:w-full'>Te invitamos a que experimentes mundos exóticos en los que tu misión es encontrar la solución</p>
                <div style={{
                  color: 'white',
                  background: '#AF00D6',
                  padding: '15px',
                  width: '140px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}>
                  <Link>
                    VER MAS
                  </Link>
                  <Link style={{
                    background: '#5C189C',
                    padding: '1px',
                    borderRadius: '50%  '
                  }}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col py-[140px]'>
            <h1  className='text-center text-white mb-[40px] text-2xl md:mb-[80px] md:text-5xl'>Lideres de videojuegos y consolas</h1>
            <div className='flex flex-col items-center md:flex-row md:justify-evenly md:items-center'>
              <div className='w-3/4 my-10 md:w-1/5'>
                <h3  className='text-purple-500 text-center text-xl md:text-3xl'>CARRERAS PROFESIONAS</h3>
                <p className='text-white text-center'>Las reseñas de otros clientes suponen una forma estupenda de impulsar tus ventas</p>
              </div>
              <div className='w-3/4 my-10 md:w-1/5'>
                <h3  className='text-purple-500 text-center text-xl md:text-3xl'>CARRERAS PROFESIONAS</h3>
                <p className='text-white text-center'>Las reseñas de otros clientes suponen una forma estupenda de impulsar tus ventas</p>
              </div>
              <div className='w-3/4 my-10 md:w-1/5'>
                <h3  className='text-purple-500 text-center text-xl md:text-3xl'>CARRERAS PROFESIONAS</h3>
                <p className='text-white text-center'>Las reseñas de otros clientes suponen una forma estupenda de impulsar tus ventas</p>
              </div>
            </div>
          </div>

          <div style={{
            backgroundImage:'url(/img/bg-home-end.png)',
            backgroundPosition:'left',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
          }}>
            <div className='py-[140px] flex flex-col items-left ml-20 md:flex md:flex-col md:items-left md:ml-60'>
              <h5 className='text-purple-600 text-4xl md:text-5xl'>Sky-Level</h5>
              <h1 className='text-white text-2xl py-5 md:text-7xl md:py-10'>Tu sitio preferido de videojuegos</h1>
              <div style={{
                  color: 'white',
                  background: '#AF00D6',
                  padding: '15px',
                  width: '140px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '10px',
                }}>
                  <Link>
                    VER MAS
                  </Link>
                  <Link style={{
                    background: '#5C189C',
                    padding: '5px',
                    borderRadius: '50%  '
                  }}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
            </div>
          </div>
        </section>
      </section>
      <Footer></Footer>
    </div>
  )
}
