import React from 'react'
import Login from './pages/login'
import Intervals from './pages/intervals'
import Home from './pages/home'
import NotFind from './pages/not-find'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App : React.FC= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/intervals/*" element={<Intervals />} />
        <Route path="/*" element={<Home />} />
        <Route path="*" element={ <NotFind />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
