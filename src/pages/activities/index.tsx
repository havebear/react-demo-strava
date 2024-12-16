/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-16 17:22:43
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
  { title: '概览', path: '/activities/1/overview' },
  // { title: '分析', path: '/analysis' },
  { title: '圈', path: '/activities/1/laps' },
  { title: '最佳成绩', path: '/activities/1/best-efforts' }
]

const Activities: React.FC = () => {
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
          <Route path="/activities/1/*" element={<ActivitiesRoutes />} />
        </Routes>
      </div>
    </PageContainer>
  )
}

const ActivitiesRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="activities/1" element={<Overview />} />
      <Route path="activities/1/overview" element={<Overview />} />
      {/* <Route path="/analysis" element={<Analysis />} /> */}
      <Route path="activities/1/laps" element={<Laps />} />
      <Route path="activities/1/best-efforts" element={<BestEfforts />} />
    </Routes>
  )
}

export default Activities

