/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-18 17:09:58
 * @Description: intervals
 */

import React from 'react'
import Active from './active'
import Fitness from './fitness'
import Power from './power'
import Pace from './pace'
import Totals from './totals'
import Compare from './compare'
import CompareActivities from './compare-activities'
import Settings from './settings'
import Groups from './groups'
import Chats from './chats'
import Athlete from '../athlete'
import { Link, Routes, Route } from 'react-router-dom'

interface IMenu {
  title: string,
  path: string
}

const MENUS:Array<IMenu> = [
  { title: '活动', path: '/intervals/active' },
  { title: '健康度', path: '/intervals/fitness' },
  { title: '功率', path: '/intervals/power' },
  { title: '配速', path: '/intervals/pace' },
  { title: '统计', path: '/intervals/totals' },
  { title: '比较', path: '/intervals/compare' },
  { title: '比较活动', path: '/intervals/compare-activities' },
  { title: '设置', path: '/intervals/settings' },
  { title: '群组', path: '/intervals/groups' },
  { title: '聊天', path: '/intervals/chats' },
  { title: '个人资料', path: '/intervals/athlete' },
]

const Intervals: React.FC = () => {
  const menusEl = MENUS.map(item => {
    return (
      <Link to={item.path} key={item.title}>
        {item.title}
      </Link>
    )
  })

  return (
    <div>
      <div>
        {menusEl}
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Active />} />
          <Route path="active" element={<Active />} />
          <Route path="fitness" element={<Fitness />} />
          <Route path="power" element={<Power />} />
          <Route path="pace" element={<Pace />} />
          <Route path="totals" element={<Totals />} />
          <Route path="compare" element={<Compare />} />
          <Route path="compare-activities" element={<CompareActivities />} />
          <Route path="settings" element={<Settings />} />
          <Route path="groups" element={<Groups />} />
          <Route path="chats" element={<Chats />} />
          <Route path="athlete" element={<Athlete />} />
        </Routes>
      </div>
    </div>
  )
}

export default Intervals

