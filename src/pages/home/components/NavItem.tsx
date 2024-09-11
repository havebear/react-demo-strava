/*
 * @Author: BGG
 * @Date: 2024-09-11 14:34:24
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-11 16:43:56
 * @Description: 菜单项
 */

import React from 'react'
import style from '../css/Nav.module.less'
import { NavItemProps } from '../types/nav'

const NavItem: React.FC<NavItemProps> = ({ title, children, path, dropAlign = 'left' }) => {

  const menus = children?.map(item => <div>{item.title}</div>)

  const navDropdown = (
    <div className={`${style.nav_dropdown} ${style['nav_dropdown_' + dropAlign]}`}>
      {menus}
    </div>
  )

  return (
    <div className={style.nav_item}>
      {title}
      { children ? navDropdown : null }
    </div>
  )
}

export default NavItem
