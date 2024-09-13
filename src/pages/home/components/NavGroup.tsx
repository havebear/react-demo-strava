/*
 * @Author: BGG
 * @Date: 2024-09-11 14:38:50
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-11 16:46:40
 * @Description: 菜单组合
 */

import React from 'react'
import NavItem from './NavItem'
import style from '../css/Nav.module.less'
import { INavItemProps } from '../types/nav'

interface INavGroupProps {
  data: INavItemProps[]
}

const NavGroup: React.FC<INavGroupProps> = ({ data = [] }) => {

  const navGroup = data.map(item => <NavItem title={item.title} path={item.path} children={item.children} dropAlign={item.dropAlign} />)

  return (
    <div className={style.nav_group}>
      { navGroup }
    </div>
  )
}

export default NavGroup
