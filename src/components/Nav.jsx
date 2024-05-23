import React, { useEffect, useState , useContext} from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setNav } from '../features/nav/navSlice'
import { setUserDetails } from '../features/user/userSlice'
import { removeCart } from '../features/cart/cartSlice'
import CartSummary from './CartSummary'
import { useCart } from '../context/CartContext'
import { getTotalCart } from '../../utils/getTotalCart'
export default function Navbar() {
    const{cart} = useCart()
    const total = getTotalCart(cart)

    const [navContact, setNavContact] = useState()
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()
    const stateNavNow = useSelector(state => state.nav.navValue)
    const dispatch = useDispatch()
    const [isScroll, setIsScroll] = useState(false)
    const [userDisplay, setUserDisplay] = useState(false)
    const [showCarrito, setShowCarrito] = useState(null)
   

    
    
    const handleLogout = async () => {
        const fetchData = await fetch('http://localhost:3000/logout', {
            method: 'get',
            credentials: 'include'
        })

        const dataResponse = await fetchData.json()
        if (dataResponse.success) {
            dispatch(setUserDetails(null))
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
            <nav className={isScroll ? 'bg-gradient-to-r from-violet-700 to-violet-900 shadow-lg shadow-violet-500/50 transition' : 'shadow-lg shadow-violet-500/50 transition'} style={{
                display: 'flex',
                position: 'fixed',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                padding: '10px 0',
                borderBottom: '2px solid white',
                zIndex: '10',
                transition: 'background-color 1s linear',
                background: navContact ? 'black' : ''
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
                    <nav className={clase}>
                        {
                            user?.id && <div className='block md:hidden border rounded-full p-3 bg-indigo-500'>
                                <i className="fa-regular fa-user text-white"></i>
                            </div>
                        }
                        <button className='my-9 text-white text-xl md:mx-4 md:my-0'>
                            <NavLink to='/home' className={({ isActive }) => isActive ? "underline" : ""}>
                                Home
                            </NavLink>
                        </button>
                        <button className='relative group my-9 text-white text-xl md:mx-4 md:my-0'>
                            <NavLink to='/products' className={({ isActive }) => isActive ? "underline" : ""}>
                                Products
                            </NavLink>
                            <div style={{ background: 'rgba(55, 55, 55, 0.99)' }} className='absolute shadow-2xl rounded-md bg-white h-fit px-8 py-4 hidden md:group-hover:block'>
                                <nav className='transition duration-1000'>
                                    <ul>
                                        <li className='py-2'>
                                            <NavLink to='/products' className='whitespace-nowrap text-purple-600 hover:text-purple-800'>Monitores</NavLink>
                                        </li>
                                        <li className='py-2'>
                                            <NavLink className='whitespace-nowrap text-purple-600  hover:text-purple-800'>PC Armadas</NavLink>
                                        </li>
                                        <li className='py-2'>
                                            <NavLink className='whitespace-nowrap text-purple-600  hover:text-purple-800'>Perifericos</NavLink>
                                        </li>
                                        <li className='py-2'>
                                            <NavLink className='whitespace-nowrap text-purple-600  hover:text-purple-800'>Laptops</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </button>
                        <button className='my-9 text-white text-xl md:mx-4 md:my-0'>
                            <NavLink to='/contact' className={({ isActive }) => {
                                if (isActive) {
                                    setNavContact(true)
                                    return 'underline'
                                } else {
                                    return ''
                                }
                            }}>
                                Contact
                            </NavLink>
                        </button>

                        <button className={stateNavNow ? 'flex block' : 'hidden'} onClick={() => dispatch(setNav(false))}>
                            <i className="fa-solid fa-x fa-2xl " style={{ color: '#8A2BE2' }}></i>
                        </button>

                    </nav>
                </div>
                <div className='flex flex-col  md:flex md:flex-row md:items-center md:pr-4'>
                    <div className='flex '>
                        <button onClick={() => setShowCarrito(true)}>
                            <i className="fa-solid fa-bag-shopping fa-2xl pr-4 text-indigo-500">
                                <span className='text-white'>
                                    {cart.length}
                                </span>
                            </i>
                        </button>

                        <div className={`  
                                ${showCarrito ? 'transform translate-0' : 'transform translate-x-[100vw]'}
                                z-20 
                                overflow-y-auto
                                transition-transform 
                                duration-1000 
                                ease-in-out 
                                w-screen
                                lg:w-[35%]
                                h-full 
                                fixed  
                                text-center 
                                top-0 
                                right-0
                                border-l
                                flex flex-col
                        `} style={{ background: 'rgb(65,65,65) linear-gradient(302deg, rgba(65,65,65,1) 35%, rgba(55,55,55,1) 67%)' }}>

                            <div  style={{                    
                                background:' rgb(215,215,215) linear-gradient(302deg, rgba(215,215,215,1) 22%, rgba(182,182,182,1) 35%, rgba(215,215,215,1) 79%)'
                            }} className='h-[10%] place-content-center'>
                                <h1 className='text-left text-3xl font-medium ml-5'>Carrito:</h1>
                            </div>
                           <CartSummary/>
                           <div  style={{                    
                                background:' rgb(215,215,215) linear-gradient(302deg, rgba(215,215,215,1) 22%, rgba(182,182,182,1) 35%, rgba(215,215,215,1) 79%)'
                            }}  className='h-[10%]  place-content-center'>
                                 <h1 className='text-left text-3xl font-medium ml-5'>TOTAL: ${total}</h1>
                            </div>

                            <button onClick={() => setShowCarrito(null)} className='text-black font-extrabold absolute top-1 right-1'>
                                Close
                            </button>

                        </div>

                        <div className='block md:hidden'>
                            <button onClick={() => dispatch(setNav(true))} style={{ textShadow: '0 0 1px #FFF, 0 0 1px #FFF, 0 0 1px #FFF, 0 0 10px #A115FF, 0 0 20px #A115FF, 0 0 20px #A115FF, 0 0 55px #A115FF, 0 0 75px #A115FF' }}>
                                <i className="fa-solid fa-bars fa-xl" style={{ color: '#fff' }}></i>
                            </button>
                        </div>

                        {
                            user?.id &&
                            <div className='relative rounded-lg'>
                                <div className='cursor-pointer group-hover:flex hidden md:block border rounded-full p-3 bg-indigo-500' onClick={() => setUserDisplay(prev => !prev)}>
                                    <i className="fa-regular fa-user text-white"></i>
                                </div>
                                <div className={`${userDisplay ? 'flex' : 'hidden'}
                                absolute flex-col h-fit rounded-md w-[15vw]`}
                                    style={{ background: 'rgba(55, 55, 55, 0.99)' }}>
                                    <div className='bg-purple-900 p-5'>
                                        <h1 className='text-white'>{user?.email}</h1>
                                    </div>
                                    <div className='flex flex-col p-5'>
                                        <NavLink className='text-xl whitespace-nowrap text-purple-600  hover:text-purple-800 py-2'>
                                            Edit User
                                        </NavLink>
                                        {
                                            user?.admin === 1 &&
                                            <NavLink to={user?.id === 115 ? '/panel-admin' : '/'} className='text-xl whitespace-nowrap text-purple-600  hover:text-purple-800 py-2'>
                                                Panel Admin
                                            </NavLink>
                                        }
                                    </div>
                                    <div className='cursor-pointer absolute top-1 right-1' onClick={() => setUserDisplay(prev => !prev)}>
                                        <i className="fa-solid fa-x fa-xl text-violet-50"></i>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    {
                        user?.id ?

                            <button className='hover:bg-indigo-600 transition-colors duration-500 my-3 text-white text-xl bg-indigo-500 rounded-2xl px-3 w-full md:mx-4 md:my-0' onClick={handleLogout}>
                                Logout
                            </button>
                            :
                            <button className='hover:bg-indigo-600 transition-colors duration-500 my-3 text-white text-xl bg-indigo-500 rounded-2xl px-3 w-full  md:mx-4 md:my-0'>
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


