import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {

  const { isAuthenticated, logout, user } = useAuth()

  return (
    <nav className='bg-zinc-700 m-3 flex justify-between py-5 px-5 h-15 rounded-lg '>
      <Link to="/">
        <h1 className='text-md font-bold md:text-2xl'>Tasks Manager</h1>
      </Link>

      <ul className='flex items-center gap-x-4'>
        {isAuthenticated ? (
          <>
          <li className='hidden md:block'>
            {user.username}
          </li>
            <li>
              <Link 
                to="/add-task"
                className='bg-indigo-500 px-4 py-1 rounded-md'
                >Add Task</Link>
            </li>
            <li>
              <Link 
                to="/" 
                onClick={() => logout()}
                className='bg-red-400 px-4 py-1 rounded-md'
              >Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/" className='hidden md:block bg-indigo-500 px-4 py-1 rounded-md'>Home</Link>
            </li>
            <li>
              <Link 
                to="/login"
                className='bg-indigo-500 px-4 py-1 rounded-md'
                >Login</Link>
            </li>
            <li>
              <Link 
                to="/register"
                className='bg-indigo-500 px-4 py-1 rounded-md'
                >Register</Link>
            </li>
          </>
        )}
      </ul>


    </nav>

  )
}
