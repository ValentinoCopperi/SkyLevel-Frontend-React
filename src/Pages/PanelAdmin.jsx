import React from 'react'
import Navbar from '../components/Nav'
import Footer from './../components/Footer';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink , Outlet } from 'react-router-dom';

export default function PanelAdmin() {
    const user = useSelector(state => state?.user?.user)
  return (
    <section>
        <Navbar></Navbar>
        <div className='min-h-[100vh] flex bg-black pt-[97px] md:pt-[70px]'>
            <aside className='min-h-full w-full max-w-64 bg-black '>
                <div className='text-white h-32 flex justify-center items-center flex-col'>
                    <h1>{user?.id ? user?.email : 'Usuario unknown' }</h1>
                    <h5 className='capitalize font-semibold'>{user?.id ? user?.name : 'Usuario uknown'}</h5>             
                </div>
                <div className='text-white'>
                    <nav className='grid p-4'>
                        <button className=' px-2 py-1 hover:bg-slate-100 hover:text-black'>
                            <NavLink to='all-users' style={{width:'100%'}} className={({ isActive }) => isActive ? "underline" : ""}>
                                All Users
                            </NavLink>
                        </button>
                        <button className=' px-2 py-1 hover:bg-slate-100 hover:text-black'>
                            <NavLink to='product' style={{width:'100%'}} className={({ isActive }) => isActive ? "underline" : ""}>
                               Admin Products
                            </NavLink>
                        </button>
                        
                    </nav>
                </div>
            </aside>
            <main className='bg-[#12100c] w-full '>
               <Outlet/>
            </main>
        </div>
        <Footer></Footer>
    </section>
  )
}
