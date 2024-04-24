import React from 'react'
import { useState } from 'react'
import DeleteModal from './modals/DeleteModal'
import deleteUser from "../../../utils/deleteUser";
import CreateUserModal from './modals/CreateUserModal';
// FLOAT IU
export default function AdminUsersTable({ users }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredUsers, setFilteredUsers] = useState()
  const[error,setError] = useState(false)

  const handleDelete = async (id) => {
      const res = await deleteUser(id)
      
      if(res.error == true) {
        setError(true)
        return
      }
      setError(false)
      window.location.reload()
  }

  const handleChange = (e) => {
    searchTerm.length > 1 ?
      setFilteredUsers(users.filter(user => user.email.split('@')[0].toLowerCase().includes(searchTerm.toLowerCase())))
      : setFilteredUsers([])
    setSearchTerm(e.target.value)
  }

;

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">

      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-cyan-100 text-xl font-bold sm:text-2xl">
            Team members
          </h3>
          <p className="text-white mt-2">
            Admin our registered user in the database
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <div  className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm">   
              <CreateUserModal/>
          </div>   
        </div>
      </div>
      {
        error && <div>
                  <h1 className='text-center text-2xl text-red-500'>Error on deleting user</h1>
                </div>
      }
     
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="max-w-md px-4 mx-auto">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search Email"
                      onChange={handleChange}
                      value={searchTerm}
                      className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                  </div>
                </form>
              </th>

            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">

            {filteredUsers && filteredUsers.length ?
              filteredUsers.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img src={item.avatar} className="w-10 h-10 rounded-full" />
                    <div>
                      <span className="block text-white font-semibold text-sm font-medium">{item.name}</span>
                      <span className="block text-text-white text-xs">{item.email}</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-white'>{item.email}</span>
                  </td>
                  <td className="lg:pl-20">
                    <DeleteModal prop={item.name} id={item.id} currentFunction={handleDelete}/>
                  </td>
                </tr>
              ))
              :
              users.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img src={item.avatar} className="w-10 h-10 rounded-full" />
                    <div>
                      <span className="block text-white font-semibold text-sm">{item.name}</span>
                      <span className="block text-text-white text-xs">{item.email}</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-white'>{item.email}</span>
                  </td>
                  <td className="lg:pl-20">
                   
                    <DeleteModal prop={item.name} id={item.id} currentFunction={handleDelete}/>
                    
                  </td>
                </tr>
              ))

            }

          </tbody>
        </table>
        
      </div>
    </div>
  )
}
