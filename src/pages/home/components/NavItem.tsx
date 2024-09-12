/*
 * @Author: BGG
 * @Date: 2024-09-11 14:34:24
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-12 15:39:14
 * @Description: 菜单项
 */

import React from 'react'
import style from '../css/Nav.module.less'
import { NavItemProps } from '../types/nav'

interface DropdownItemProps {
  title: string
}

/** 下拉菜单项 */
const DropdownItem: React.FC<DropdownItemProps> = ({ title }) => {
  return (
    <div className={style.dropdown_item}>
      <span className={style.dropdown_item_title}>{title}</span>
    </div>
  )
}

const NavItem: React.FC<NavItemProps> = ({ title, children, path, dropAlign = 'left' }) => {

  const menus = children?.map(item => <DropdownItem title={item.title} />)

  // 子节点下拉菜单
  const navDropdown = (
    <div className={`${style.dropdown} ${style['dropdown_' + dropAlign]}`}>
      {menus}
    </div>
  )

  // 没有子节点的菜单
  const notChildEl = (
    <div className={style.nav_item}>
      <span className={style.nav_item_title}>{title}</span>
    </div>
  )

  // 有子节点的菜单
  const hasChildEl = (
    <div className={`${style.nav_item} ${style.nav_item_border}`}>
      <span className={style.nav_item_title}>{title}</span>
      { navDropdown }
    </div>
  )

  return children ? hasChildEl : notChildEl

}

export default NavItem
