import * as Dialog from "@radix-ui/react-dialog";
import deleteUser from "../../../../utils/deleteUser";
import { useState, useRef } from "react";
import { useForm } from 'react-hook-form'
import registerUser from "../../../../utils/registerUser";
export default function CreateUserModal() {
    const {
        register: registerRegister,
        handleSubmit: handleRegisterSubmit,
        formState: { errors: errorsRegister },
        watch
    } = useForm({
        defaultValues: {
            name: '',
            emailRegister: '',
            passwordRegister: '',
            confPasswordRegister: ''
        }
    })
    const refPassword = useRef(null)
    refPassword.current = watch('passwordRegister', '')

    const [showRegisterPass, setShowRegisterPass] = useState(false)
    const [advice, setAdvice] = useState(null)

    const handleSubmit = handleRegisterSubmit((data) => {
        const datos = {
            name: data.name,
            user: data.emailRegister,
            password: data.passwordRegister
        }
        registerUser(datos)
            .then((res) => {
                if (res.error == true) {
                    setAdvice(res.message)
                    return
                }
                setAdvice(res.message)
            })
            

    })

    return (
        <Dialog.Root>
            <Dialog.Trigger className="w-32 py-2 ml-2 shadow-sm rounded-md bg-indigo-600 text-white  flex items-center justify-center">
                Add User
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
                <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 w-full max-w-lg">
                    <main className="w-full h-[70vh] mt-[15vh] mb-10 flex flex-col items-center justify-center sm:px-4">
                        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">

                            <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">


                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    <div>
                                        {
                                            advice && <h5 className="text-red-500 text-1xl">{advice}</h5>
                                        }
                                        <label className="font-medium">
                                            Name
                                        </label>
                                        <input type="text" placeholder="Name"
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"

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
                                    </div>
                                    <div>
                                        <label className="font-medium">
                                            Email
                                        </label>
                                        <input type="email" placeholder="Email"
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"

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
                                    </div>
                                    <div>
                                        <label className="font-medium">
                                            Password
                                        </label>
                                        <input className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                            type={showRegisterPass ? 'text' : 'password'} placeholder="Password"
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

                                    </div>
                                    {
                                        errorsRegister.passwordRegister && <span className='text-red-400'>{errorsRegister.passwordRegister?.message}</span>
                                    }

                                    <div>
                                        <label className="font-medium">
                                            Confirm Password
                                        </label>
                                        <input className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                            type={showRegisterPass ? 'text' : 'password'} placeholder="Confirm Password"
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
                                    </div>
                                    <button
                                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                                    >
                                        Sign up
                                    </button>
                                </form>
                            </div>

                        </div>

                    </main>
                </Dialog.Content>
            </Dialog.Portal >
        </Dialog.Root >
    );
};