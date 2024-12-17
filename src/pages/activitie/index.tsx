/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-17 17:06:20
 * @Description: 活动
 */

import React from 'react'
import PageContainer from '../../components/wrap/PageContainer'
import Overview from './components/Overview'
// import Analysis from './components/Analysis'
import Laps from './components/Laps'
import BestEfforts from './components/BestEfforts'
import style from './css/index.module.less'
import { Routes, Route, Link } from 'react-router-dom'

interface IMenu {
  title: string
  path: string
}

const MENUS:Array<IMenu> = [
  { title: '概览', path: '/activitie/1/overview' },
  // { title: '分析', path: '/analysis' },
  { title: '圈', path: '/activitie/1/laps' },
  { title: '最佳成绩', path: '/activitie/1/best-efforts' }
]

const Activitie: React.FC = () => {
  const menusEl = MENUS.map((item, index) => {
    return (
      <Link to={item.path} key={index} className={style.menu_item}>
        {item.title}
      </Link>
    )
  })

  return (
    <PageContainer>
      <div className={style.global_header}>
        {menusEl}
      </div>
      <div>
        <Routes>
          <Route path="/activitie/1/*" element={<ActivitieRoutes />} />
        </Routes>
      </div>
    </PageContainer>
  )
}

const ActivitieRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/activitie/1" element={<Overview />} />
      <Route path="/activitie/1/overview" element={<Overview />} />
      {/* <Route path="/analysis" element={<Analysis />} /> */}
      <Route path="/activitie/1/laps" element={<Laps />} />
      <Route path="/activitie/1/best-efforts" element={<BestEfforts />} />
    </Routes>
  )
}

export default Activitie

