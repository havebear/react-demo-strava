/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-11 15:03:30
 * @Description: 首页
 */

import React from 'react'
import NavBar from './NavBar'
import Dashboard from '../dashboard'
import Activities from '../activities'
import { Routes, Route } from 'react-router-dom'

import style from './css/index.module.less'

const Home: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.global_header}>
        <NavBar />
      </div>
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

