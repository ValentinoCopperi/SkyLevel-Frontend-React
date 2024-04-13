import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {useSelector  , useDispatch} from 'react-redux'
import { appearNavRedux , hiddeNav  , stateNav} from '../features/nav/navSlice'
import { setMobile, stateMobile } from "../features/mobile/mobileSlice"




export default function Navbar() {
    
    const stateMobileNow = useSelector(stateMobile)
    const stateNavNow = useSelector(stateNav)
    const dispatch = useDispatch()
    const [isScroll, setIsScroll] = useState(false)

    const handleScroll = () => {
        scrollY > 70 ? setIsScroll(true) : setIsScroll(false)
    }
   
    window.addEventListener('scroll', handleScroll)


    let clase = '';

    if (stateNavNow) {
        clase = 'fixed w-full h-screen bg-black z-2 top-0 right-0 flex flex-col items-center justify-center';
    } else {
        clase = 'hidden  md:flex md:block';
    }
    

  

    return <>
        <section>
            <nav className={isScroll ? ' bg-gradient-to-r from-violet-700 to-violet-900 shadow-lg shadow-violet-500/50 transition' : 'shadow-lg shadow-violet-500/50 transition'} style={{
                display:'flex' ,
                position:'fixed',
                justifyContent:'space-around',
                alignItems:'center' , 
                width:'100%' , 
                padding:'20px 0' ,
                borderBottom: '2px solid white',
                zIndex:'10',
                transition : 'background-color 1s linear',

                }}>
                <h1 style={{ 
                    fontSize:'2rem', 
                    paddingLeft:'1rem', 
                    color: '#A002FF',
                    fontWeight:'bolder',
                    textShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #A115FF, 0 0 30px #A115FF, 0 0 40px #A115FF, 0 0 55px #A115FF, 0 0 75px #A115FF'
                }} className='animate-fade-in'>
                   Sky-Level
                </h1>
                <div style={{zIndex:'10'}} >
                    <ul className={clase}>
                        <button className='my-9 text-white text-xl md:mx-4 md:my-0'>
                            <NavLink to='/home' className={({ isActive }) => isActive ? "underline" : ""}>
                                Home
                            </NavLink>
                        </button>
                        <button className='my-9 text-white text-xl md:mx-4 md:my-0'>
                            <NavLink to='/products' className={({ isActive }) => isActive ? "underline" : ""}>
                                Products
                            </NavLink>
                        </button>
                        <button className='my-9 text-white text-xl md:mx-4 md:my-0'>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? "underline" : ""}>
                                Contact
                            </NavLink>
                        </button>
                        <button className='my-9 text-white text-xl md:mx-4 md:my-0'>
                            <NavLink to='/login' className={({ isActive }) => isActive ? "underline" : ""}>
                                Login
                            </NavLink>
                        </button>
                        <button className={stateNavNow ? 'flex block' : 'hidden'} onClick={() => {
                            dispatch(hiddeNav())
                        }}>
                            <i className="fa-solid fa-x fa-2xl fixed top-8 right-3 " style={{ color: '#8A2BE2' }}></i>
                        </button>
                    </ul>
                </div>
                <div className='flex items-center pr-4'>
                    <button  style={{
                        textShadow: '0 0 1px #FFF, 0 0 1px #FFF, 0 0 1px #FFF, 0 0 10px #A115FF, 0 0 20px #A115FF, 0 0 20px #A115FF, 0 0 55px #A115FF, 0 0 75px #A115FF'
                    }}>
                        <i className="fa-solid fa-bag-shopping fa-xl pr-4" style={{color: '#fff'}}>0</i>
                    </button>
                    <div className='block md:hidden'>
                        <button onClick={() => { dispatch(appearNavRedux())  }} style={{textShadow: '0 0 1px #FFF, 0 0 1px #FFF, 0 0 1px #FFF, 0 0 10px #A115FF, 0 0 20px #A115FF, 0 0 20px #A115FF, 0 0 55px #A115FF, 0 0 75px #A115FF'}}>
                            <i className="fa-solid fa-bars fa-xl" style={{ color: '#fff' }}></i>
                        </button>
                    </div>
                </div>

            </nav>
        </section>

    </>

}


