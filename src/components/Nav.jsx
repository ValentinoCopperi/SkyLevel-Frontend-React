import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setNav } from '../features/nav/navSlice'
import { setMobile, stateMobile } from "../features/mobile/mobileSlice"




export default function Navbar() {
    const[navContact,setNavContact] = useState()
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()
    const stateNavNow = useSelector(state => state.nav.navValue)
    const dispatch = useDispatch()
    const [isScroll, setIsScroll] = useState(false)

    const handleLogout = async () => {
        const fetchData = await fetch('http://localhost:3000/logout', {
            method: 'get',
            credentials: 'include'
        })

        const dataResponse = await fetchData.json()
        if (dataResponse.success) {
            navigate('/')
            window.location.reload()
        }
    }


    const handleScroll = () => {
        scrollY > 70 ? setIsScroll(true) : setIsScroll(false)
    }

    window.addEventListener('scroll', handleScroll)

    let clase = '';
    stateNavNow ?
        clase = 'fixed w-full h-screen bg-black z-2 top-0 right-0 flex flex-col items-center justify-center'
        : clase = 'hidden  md:flex md:block';


    return <>
        <section>
            <nav className={isScroll ? ' bg-gradient-to-r from-violet-700 to-violet-900 shadow-lg shadow-violet-500/50 transition' : 'shadow-lg shadow-violet-500/50 transition'} style={{
                display: 'flex',
                position: 'fixed',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                padding: '10px 0',
                borderBottom: '2px solid white',
                zIndex: '10',
                transition: 'background-color 1s linear',
                background : navContact ? 'black' : ''
            }}>
                <h1 style={{
                    fontSize: '2rem',
                    paddingLeft: '1rem',
                    color: '#A002FF',
                    fontWeight: 'bolder',
                    textShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #A115FF, 0 0 30px #A115FF, 0 0 40px #A115FF, 0 0 55px #A115FF, 0 0 75px #A115FF'
                }} className='animate-fade-in'>
                    Sky-Level
                </h1>
                <div style={{ zIndex: '10' }} >
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
                            <NavLink to='/contact' className={({ isActive }) => 
                            {
                                if(isActive){
                                    setNavContact(true)
                                    return 'underline'
                                }else{
                                    return ''
                                }
                            }}>
                                Contact
                            </NavLink>
                        </button>
                        <button className={stateNavNow ? 'flex block' : 'hidden'} onClick={() => dispatch(setNav(false))}>
                            <i className="fa-solid fa-x fa-2xl " style={{ color: '#8A2BE2' }}></i>
                        </button>
                       
                    </ul>
                </div>
                <div className='flex flex-col  md:flex md:flex-row md:items-center md:pr-4'>
                    <div className='flex '>
                        <button style={{
                            textShadow: '0 0 1px #FFF, 0 0 1px #FFF, 0 0 1px #FFF, 0 0 10px #A115FF, 0 0 20px #A115FF, 0 0 20px #A115FF, 0 0 55px #A115FF, 0 0 75px #A115FF'
                        }}>
                            <i className="fa-solid fa-bag-shopping fa-xl pr-4" style={{ color: '#fff' }}>0</i>
                        </button>
                    
                        <div className='block md:hidden'>
                            <button onClick={() => dispatch(setNav(true))} style={{ textShadow: '0 0 1px #FFF, 0 0 1px #FFF, 0 0 1px #FFF, 0 0 10px #A115FF, 0 0 20px #A115FF, 0 0 20px #A115FF, 0 0 55px #A115FF, 0 0 75px #A115FF' }}>
                                <i className="fa-solid fa-bars fa-xl" style={{ color: '#fff' }}></i>
                            </button>
                        </div>
                    </div>
                    {
                        user?.id ?

                            <button className='my-3 text-white text-xl bg-indigo-500 rounded-2xl px-3 w-full md:mx-4 md:my-0' onClick={handleLogout}>
                                Logout
                            </button>
                            :
                            <button className='my-3 text-white text-xl bg-indigo-500 rounded-2xl px-3 w-full  md:mx-4 md:my-0'>
                                <NavLink to='/login' className={({ isActive }) => isActive ? "underline" : ""}>
                                    Login
                                </NavLink>
                            </button>

                    }
                </div>

            </nav>
        </section>

    </>

}


