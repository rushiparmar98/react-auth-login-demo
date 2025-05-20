import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoading, error, isLoggedIn } = useSelector((state) => state.auth)

  const handleLogin = () => {
    dispatch(loginUser({ email, password }))
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/Home')
    }
  }, [isLoggedIn, navigate])

  return (
    <div className="max-w-sm mx-auto mt-10 p-5 border rounded shadow-lg">
      <h2 className="text-2xl mb-4">Login</h2>

      <input
        className="w-full p-2 mb-3 border rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full p-2 mb-3 border rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        disabled={isLoading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <p className="mt-4 text-gray-600 text-sm">
        <b>Use this to login:</b> <br />
        Email: <code>test@example.com</code> <br />
        Password: <code>123456</code>
      </p>
    </div>
  )
}

export default Login
