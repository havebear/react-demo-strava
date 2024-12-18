/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-18 16:26:40
 * @Description: 活动
 */

import React from 'react'
import PageContainer from '../../components/wrap/PageContainer'
import Overview from './overview'
import Analysis from './analysis'
import Laps from './laps'
import BestEfforts from './best-efforts'
import style from './css/index.module.less'
import { Routes, Route, Link } from 'react-router-dom'

interface IMenu {
  title: string
  path: string
}

const MENUS:Array<IMenu> = [
  { title: '概览', path: '/activitie/1/overview' },
  { title: '分析', path: '/activitie/1/analysis' },
  { title: '圈', path: '/activitie/1/laps' },
  { title: '最佳成绩', path: '/activitie/1/best-efforts' }
]

const Activitie: React.FC = () => {
  const menusEl = MENUS.map(item => {
    return (
      <Link to={item.path} key={item.title} className={style.menu_item}>
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
          <Route index element={<Overview />} />
          <Route path="/1/overview" element={<Overview />} />
          <Route path="/1/analysis" element={<Analysis />} />
          <Route path="/1/laps" element={<Laps />} />
          <Route path="/1/best-efforts" element={<BestEfforts />} />
        </Routes>
      </div>
    </PageContainer>
  )
}

export default Activitie

