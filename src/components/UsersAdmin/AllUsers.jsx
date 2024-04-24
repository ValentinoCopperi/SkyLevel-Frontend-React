import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminUsersTable from './AdminUsersTable'
export default function AllUsers() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch('http://localhost:3000/getUsers')
            .then(res => res.json())
            .then(data => {
                if (data.Error) {
                    console.log(data)
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
           
            <div className='flex flex-wrap w-full'>
                {
                    error  ?
                        <h1>Error or users are not provided</h1>
                        :  <AdminUsersTable users={users}/>          
                }
                
            </div>
        </div>
    )
}
