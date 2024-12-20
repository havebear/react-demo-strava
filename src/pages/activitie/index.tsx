/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-19 17:48:51
 * @Description: 活动
 */

import React from 'react'
import PageContainer from '../../components/wrap/PageContainer'
import LeftMenus from '../../components/menu/LeftMenus'
import ActivitieInfo from './activitie-info'
import Overview from './overview'
import Analysis from './analysis'
import Laps from './laps'
import BestEfforts from './best-efforts'
import style from './css/index.module.less'
import { IMenu } from '../../components/menu/types'
import { Routes, Route } from 'react-router-dom'

const MENUS:Array<IMenu> = [
  { title: '概览', path: '/activitie/1/overview', paths: ['/activitie/1', '/activitie/1/'] },
  { title: '分析', path: '/activitie/1/analysis' },
  { title: '圈', path: '/activitie/1/laps' },
  { title: '最佳成绩', path: '/activitie/1/best-efforts' }
]

const Activitie: React.FC = () => {
  return (
    <PageContainer flex paddingTop="30px">
      <LeftMenus list={MENUS} />
      <div className={style.main}>
        <ActivitieInfo />
        <Routes>
          <Route path="/1" element={<Overview />} />
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

