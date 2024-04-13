import React, { useState } from 'react'
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import './login.css'
import { redirect, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'

export default function Login() {

    const handleSignUpClass = () => {
        document.querySelector('.container').classList.add('right-panel-active')
    }
    const handleSignInClass = () => {
        document.querySelector('.container').classList.remove('right-panel-active')
    }
    const[userLogin , setUserLogin] = useState('')
    const[passLogin , setPassLogin] = useState('')
    const[loginAdvice , setLoginAdvice] = useState("")

    const[userRegister , setUserRegister] = useState('')
    const[passRegister , setPassRegister] = useState('')
    const[passRegister2 , setPassRegister2] = useState('')
    const[errorDatos , setErrorDatos] = useState("")

    const navigate = useNavigate()
    const handdleLogin = (e) => {
        e.preventDefault()
        
           
            const datos = {
                user:userLogin,
                password:passLogin
            }
            axios.post('http://localhost:3000/login' ,datos,{withCredentials:'include'}) 
            .then(res => {
                if(res.data.Error){
                    setLoginAdvice(res.data.Error)
                    return
                }
                if(res.data.Status == true){
                   
                    setLoginAdvice("Login Success")
                    setPassLogin("")
                    setUserLogin("")
                    navigate('/')
                }else{
                    setLoginAdvice("Contraseña incorrecta")
                }

              
            })
        
   }

    const handleRegister = (e) => {
        e.preventDefault()
        if(passRegister.length <= 0 || userRegister<= 0) {
            setErrorDatos(true)
            return
        }else{
            setErrorDatos(false)
            if(passRegister != passRegister2){
                setErrorDatos(true)
                return
            }
            const datos = {
                user:userRegister,
                password:passRegister
            }
            axios.post('http://localhost:3000/register',datos)
            .then(res => {
                if(res.data.Error){
                    console.log(res.data.Error)
                    setErrorDatos(res.data.Error)
                    return
                }
                setErrorDatos(res.data.Status)
            })
           
        }
    }
    return (
        <section style={{background:'linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%)'}}>
            <Navbar></Navbar>
            <section className='login'>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#" className='form' onSubmit={handleRegister}>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="email" placeholder="Email" value={userRegister} onChange={(e)=>setUserRegister(e.target.value)}  required/>
                            <input type="password" placeholder="Password" value={passRegister}  onChange={(e)=>setPassRegister(e.target.value)} required/>
                            <input type="password" placeholder="Confirm Password" value={passRegister2}  onChange={(e)=>setPassRegister2(e.target.value)} required/>
                            <span className='block text-red-400 text-2xl'>
                                <h1>{errorDatos ?  errorDatos : ''}</h1>
                            </span>
                            <input type="submit" value="Sing Up"/>
                        </form >
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={handdleLogin}  action="#" className='flex flex-col items-center py-20'>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input className='bg-[#eee] my-[8px] py-[12px] px-[15px]' type="email" placeholder="Email" value={userLogin} onChange={(e)=>{setUserLogin(e.target.value)}} />
                            <input  className='bg-[#eee] my-[8px] py-[12px] px-[15px]' type="text" placeholder="Password" value={passLogin} onChange={(e)=>{setPassLogin(e.target.value)}}/>
                            <span className='block text-red-400 text-2xl'>{loginAdvice ? loginAdvice : ''}</span>
                            <a href="#">Forgot your password?</a>
                           <input  className='bg-[#eee] my-[8px] py-[12px] px-[15px] w-1/2' type="submit" value="Enviar" />
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={handleSignInClass}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={handleSignUpClass}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </section>
    )
}
