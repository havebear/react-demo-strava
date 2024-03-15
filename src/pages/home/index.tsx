/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-03-15 16:28:08
 * @Description: 首页
 */

import React from 'react'
import NavBar from '../../layouts/NavBar'
import Dashboard from '../dashboard'
import Activities from '../activities'
import { Routes, Route } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/*" element={<HomeRoutes />} />
      </Routes>
    </div>
  )
}

const HomeRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="activities/:id" element={<Activities />} />
     </Routes>
  )
}

export default Home

