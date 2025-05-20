import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg text-center">
      {isLoggedIn ? (
        <>
          <h2 className="text-2xl mb-4">
            Welcome, {user?.name || user?.email} <span className="text-blue-500">To Home Page</span>
          </h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <h2>Please login first</h2>
      )}
    </div>
  )
}
