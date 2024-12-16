/*
 * @Author: BGG
 * @Date: 2024-09-11 14:44:33
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-11 15:53:29
 * @Description: 全局导航
 */

import React from 'react'
import NavGroup from './NavGroup'
import { INavItemProps } from '../types/nav'

const GlobalNav: React.FC = () => {

  const menus:Array<INavItemProps> = [
    {
      title: '控制面板',
      path: '/dashboard',
      children: [
        { title: '活动状态栏', path: '/dashboard' },
        { title: '俱乐部', path: '/clubs/search' },
        { title: '我的路段', path: '/athlete/segments/starred' },
        { title: '我的路线', path: '/athlete/routes' },
        { title: '我的目标', path: '/athlete/goals' }
      ]
    },
    {
      title: '训练',
      path: '/user',
      children: [
        { title: '训练日志', path: '/athlete/calendar' },
        { title: '我的活动', path: '/athlete/training' },
        { title: '健身追踪', path: '/athlete/training' },
        { title: '巅峰表现', path: '/athlete/training' },
        { title: '训练日志', path: '/athlete/training' },
        { title: '功率曲线', path: '/athlete/training' },
        { title: 'Fitness & Freshness', path: '/athlete/training' },
      ]
    },
    { title: '地图', path: '/map' },
    { title: '挑战', path: '/challenge' },
    { title: 'intervals', path: '/intervals' }
  ]
  
  return (
    <NavGroup data={menus} />
  )
}

export default GlobalNav
