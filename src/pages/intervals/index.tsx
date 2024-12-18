/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-18 17:01:21
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
          <Route index element={<Active />} />
          <Route path="/intervals/fitness" element={<Fitness />} />
          <Route path="/intervals/power" element={<Power />} />
          <Route path="/intervals/pace" element={<Pace />} />
          <Route path="/intervals/totals" element={<Totals />} />
          <Route path="/intervals/compare" element={<Compare />} />
          <Route path="/intervals/compare-activities" element={<CompareActivities />} />
          <Route path="/intervals/settings" element={<Settings />} />
          <Route path="/intervals/groups" element={<Groups />} />
          <Route path="/intervals/chats" element={<Chats />} />
          <Route path="/intervals/athlete" element={<Athlete />} />
        </Routes>
      </div>
    </div>
  )
}

export default Intervals

