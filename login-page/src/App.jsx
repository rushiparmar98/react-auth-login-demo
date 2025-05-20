import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './pages/Home'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  )
}
