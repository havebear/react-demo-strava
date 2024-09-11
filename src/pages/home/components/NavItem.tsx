/*
 * @Author: BGG
 * @Date: 2024-09-11 14:34:24
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-11 14:34:30
 * @Description: 菜单项
 */

import React from 'react'
import style from '../css/Nav.module.less'
import { NavItemProps } from '../types/nav'

const NavItem: React.FC<NavItemProps> = ({ title }) => {
  return (
    <div className={style.nav_item}>{title}</div>
  )
}

export default NavItem
