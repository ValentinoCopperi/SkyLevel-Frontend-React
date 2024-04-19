import React, { useEffect, useState } from 'react'

export default function AllUsers() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch('http://localhost:3000/getUsers')
            .then(res => res.json())
            .then(data => {
                if (data.Error) {
                    setError(true)
                    return
                }

                setError(false)
                setUsers(data.Data)
            })
    }, [])
    // Button code





    return (
        <div className='text-white w-[90%] mx-auto p-5'>
            <h1 className='text-2xl'>Users:</h1>
            <div className='flex flex-wrap w-full'>
                {
                    error || !users ?
                        <h1>Error or users are not provided</h1>
                        : users.map((user) => {
                            return <article key={user.id} className='border w-[30%] flex flex-col m-1'>
                                <div className='p-3'>
                                    <h1><span className='font-semibold'>Nombre</span>: {user.name}</h1>
                                    <h3><span className='font-semibold'>Email</span>: {user.email}</h3>
                                    <span><span className='font-semibold'>ID</span>: {user.id}</span>
                                </div>
                                <button className="m-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    Delete User
                                </button>
                            </article>
                        })
                }
            </div>
        </div>
    )
}
