/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-18 16:56:48
 * @Description: 首页
 */

import React from 'react'
import NavBar from './NavBar'
import Dashboard from '../dashboard'
import Activitie from '../activitie'
import Map from '../map'
import Athlete from '../athlete'
import Training from '../training'
import Challenge from '../challenge'
import Club from '../club'
import ClubDetail from '../club/detail'
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
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="activitie/*" element={<Activitie />} />
      <Route path="map" element={<Map />} />
      <Route path="athlete" element={<Athlete />} />
      <Route path="training" element={<Training />} />
      <Route path="challenge" element={<Challenge />} />
      <Route path="club" element={<Club />} />
      <Route path="club/search" element={<Club />} />
      <Route path="club/:id" element={<ClubDetail />} />
    </Routes>
  )
}

export default Home

