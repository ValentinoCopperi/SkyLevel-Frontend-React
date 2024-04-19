import React, { useContext, useState, useRef } from 'react'
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Context from '../context'
import { useForm } from 'react-hook-form'

export default function Login() {
    const { fetchUserDetails } = useContext(Context)

    const {
        register: registerLogin,
        handleSubmit: loginSubmit,
        formState: { errors: errorsLogin }
    } = useForm({
        defaultValues: {
            emailLogin: '',
            passwordLogin: '',
        }
    })

    const {
        register: registerRegister,
        handleSubmit: handleRegisterSubmit,
        formState: { errors: errorsRegister },
        watch
    } = useForm({
        defaultValues: {
            name : '',
            emailRegister: '',
            passwordRegister: '',
            confPasswordRegister: ''
        }
    })

    const navigate = useNavigate()
    const refPassword = useRef(null)
    refPassword.current = watch('passwordRegister', '')

    const [loginAdvice, setLoginAdvice] = useState("")

    const handleSignUpClass = () => {
        document.querySelector('.container').classList.add('right-panel-active')
    }
    const handleSignInClass = () => {
        document.querySelector('.container').classList.remove('right-panel-active')
    }

    const [errorDatos, setErrorDatos] = useState(false)
    const [showLoginPass, setShowLoginPass] = useState(false)
    const [showRegisterPass, setShowRegisterPass] = useState(false)


    const handdleLogin = loginSubmit((data) => {
        const datos = {
            user: data.emailLogin,
            password: data.passwordLogin
        }

        axios.post('http://localhost:3000/login', datos, { withCredentials: 'include' })
            .then(res => {
                if (res.data.Error) {
                    setLoginAdvice(res.data.Error)
                    return
                }
                if (res.data.Status == true) {

                    setLoginAdvice("Login Success")
                    fetchUserDetails()
                    navigate('/')
                } else {
                    setLoginAdvice("Contraseña incorrecta")
                }
            })
    })


    const handleRegister = handleRegisterSubmit((data) => {
        const datos = {
            name : data.name,
            user: data.emailRegister,
            password: data.passwordRegister
        }
        axios.post('http://localhost:3000/register', datos)
            .then(res => {
                if (res.data.Error) {
                    console.log(res.data.Error)
                    setErrorDatos(res.data.Error)
                    return
                }
                setErrorDatos(res.data.Status)
            })
    })
    return (
        <section style={{ background: 'linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%)' }}>
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
                            <input type="text" placeholder="Name"
                                {
                                ...registerRegister('name', {
                                    required: {
                                        value: true,
                                        message: 'Name must be provided'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Min length 6'
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Max length 30'
                                    }

                                })
                                } />
                            {
                                errorsRegister.name && <span className='text-red-400'>{errorsRegister.name?.message}</span>
                            }
                            <input type="email" placeholder="Email"
                                {
                                ...registerRegister('emailRegister', {
                                    required: {
                                        value: true,
                                        message: 'Email must be provided'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@+[a-zA-Z0-9-]+\.[a-zA-Z0-9]/,
                                        message: 'Must be email format valid'
                                    }

                                })
                                } />
                            {
                                errorsRegister.emailRegister && <span className='text-red-400'>{errorsRegister.emailRegister?.message}</span>
                            }
                            <div className='relative w-full'>
                                <input type={showRegisterPass ? 'text' : 'password'} placeholder="Password"
                                    {
                                    ...registerRegister('passwordRegister', {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Min length 6'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'Max length 30'
                                        }
                                    })
                                    } />
                                <div className='absolute top-5 right-3'>

                                    <button type='button' onClick={() => setShowRegisterPass(prevState => !prevState)}>
                                        {showRegisterPass ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                    </button>

                                </div>
                            </div>
                            {
                                errorsRegister.passwordRegister && <span className='text-red-400'>{errorsRegister.passwordRegister?.message}</span>
                            }
                            <input type={showRegisterPass ? 'text' : 'password'} placeholder="Confirm Password"
                                {
                                ...registerRegister('confPasswordRegister', {
                                    validate: (value) => {
                                        return value === refPassword.current || 'Password must be identical'
                                    }
                                })
                                } />
                            {
                                errorsRegister.confPasswordRegister && <span className='text-red-400'>{errorsRegister.confPasswordRegister?.message}</span>
                            }
                            <span className='block text-red-400 text-2xl'>
                                <h1>{errorDatos ? errorDatos : ''}</h1>
                            </span>
                            <input type="submit" value="Sing Up" />
                        </form >
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={handdleLogin} action="#" className='flex flex-col items-center py-20'>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input className='bg-[#eee] my-[8px] py-[12px] px-[15px]' type="email" placeholder="Email"
                                {
                                ...registerLogin('emailLogin', {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@+[a-zA-Z0-9-]+\.[a-zA-Z0-9]/,
                                        message: 'Must be email format valid'
                                    }

                                })
                                } />
                            {
                                errorsLogin.emailLogin && <span className='text-red-400'>{errorsLogin.emailLogin?.message}</span>
                            }
                            <div className='relative'>
                                <input className=' bg-[#eee] my-[8px] py-[12px] px-[15px]'
                                    type={showLoginPass ? 'text' : 'password'}
                                    placeholder="Password"
                                    {
                                    ...registerLogin('passwordLogin', {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        }
                                    })
                                    }
                                />
                                <div className='absolute top-5 right-3'>

                                    <button type='button' onClick={() => setShowLoginPass(prevState => !prevState)}>
                                        {showLoginPass ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                    </button>

                                </div>
                            </div>
                            {
                                errorsLogin.passwordLogin && <span className='text-red-400'>{errorsLogin.passwordLogin?.message}</span>
                            }
                            <span className='block text-red-400 text-2xl'>{loginAdvice ? loginAdvice : ''}</span>
                            <a href="#">Forgot your password?</a>
                            <input className='bg-[#eee] my-[8px] py-[12px] px-[15px] w-1/2' type="submit" value="Enviar" />
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
