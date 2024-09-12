/*
 * @Author: BGG
 * @Date: 2024-09-11 14:30:43
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-12 15:49:22
 * @Description: 用户导航
 */

import React from 'react'
import NavGroup from './NavGroup'
import { NavItemProps } from '../types/nav'


const UserNav: React.FC = () => {

  const menus:Array<NavItemProps> = [
    {
      title: '我的',
      path: '/athlete',
      dropAlign: 'right',
      children: [
        { title: '查找好友', path: '/dashboard' },
        { title: '我的个人资料', path: '/clubs/search' },
        { title: '设置', path: '/athlete/segments/starred' },
        { title: '应用程序', path: '/athlete/routes' },
        { title: '订阅者津贴', path: '/athlete/goals' },
        { title: '登出', path: '/athlete/goals' }
      ]
    },
    {
      title: '添加',
      path: '/user',
      dropAlign: 'right',
      children: [
        { title: '上传活动', path: '/athlete/calendar' },
        { title: '添加手动输入项', path: '/athlete/training' },
        { title: '创建路线', path: '/athlete/training' },
        { title: '创建帖子', path: '/athlete/training' }
      ]
    }
  ]

  return (
    <NavGroup data={menus} />
  )
}

export default UserNav
