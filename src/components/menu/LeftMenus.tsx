/*
 * @Author: BGG
 * @Date: 2024-12-19 16:06:54
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-20 14:31:00
 * @Description: 左侧菜单
 */

import React from 'react'
import style from './css/LeftMenus.module.less'
import { IMenusProps } from './types'
import { Link, useLocation } from 'react-router-dom'

const LeftMenus: React.FC<IMenusProps> = ({ list = [] }) => {
  const { pathname } = useLocation()

  // console.log(pathname)

  const menuListElm = list.map(item => (
    <Link
      className={`
        ${style.item}
        ${(pathname === item.path || (item.paths && item.paths.includes(pathname))) ? style.active : ""}
      `}
      to={item.path}
      key={item.path}>
      {item.title}
    </Link>
  ))

  return (
    <div className={style.menus}>
      {menuListElm}
    </div>
  )
}

export default LeftMenus

