/*
 * @Author: BGG
 * @Date: 2024-09-11 14:38:50
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-11 16:01:22
 * @Description: 
 */
/*
 * @Author: BGG
 * @Date: 2024-09-11 14:38:50
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-11 15:58:22
 * @Description: 菜单组合
 */

import React from 'react'
import NavItem from './NavItem'
import style from '../css/Nav.module.less'
import { NavItemProps } from '../types/nav'

interface NavGroupProps {
  data: NavItemProps[]
}

const NavGroup: React.FC<NavGroupProps> = ({ data = [] }) => {

  const navGroup = data.map(item => <NavItem title={item.title} />)

  return (
    <div className={style.nav_group}>
      { navGroup }
    </div>
  )
}

export default NavGroup
