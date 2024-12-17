/*
 * @Author: BGG
 * @Date: 2024-09-11 14:30:43
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-12 15:49:22
 * @Description: 用户导航
 */

import React from 'react'
import NavGroup from './NavGroup'
import { INavItemProps } from '../types/nav'

const DROP_ALIGN_VALUE = 'right'

const MENUS:Array<INavItemProps> = [
  {
    title: '我的',
    path: '/athlete',
    dropAlign: DROP_ALIGN_VALUE,
    children: [
      { title: '查找好友', path: '/dashboard' },
      { title: '我的个人资料', path: '/club/search' },
      { title: '设置', path: '/athlete/segments/starred' },
      { title: '应用程序', path: '/athlete/routes' },
      { title: '订阅者津贴', path: '/athlete/goals' },
      { title: '登出', path: '/athlete/goals' }
    ]
  },
  {
    title: '添加',
    path: '/user',
    dropAlign: DROP_ALIGN_VALUE,
    children: [
      { title: '上传活动', path: '/athlete/calendar' },
      { title: '添加手动输入项', path: '/athlete/training' },
      { title: '创建路线', path: '/athlete/training' },
      { title: '创建帖子', path: '/athlete/training' }
    ]
  }
]

const UserNav: React.FC = () => {
  return (
    <NavGroup data={MENUS} />
  )
}

export default UserNav
