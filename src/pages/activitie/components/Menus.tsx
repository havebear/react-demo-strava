/*
 * @Author: BGG
 * @Date: 2024-04-29 14:15:30
 * @LastEditors: BGG
 * @LastEditTime: 2024-04-29 14:15:40
 * @Description: 菜单
 */

import React from 'react'
import style from '../css/Menus.module.less'
import { Link } from 'react-router-dom'

interface IMenuItem {
  name: string
  path: string
}

interface IMenus {
  list: IMenuItem[]
}

const Menus: React.FC<IMenus> = ({ list = [] }) => {
  const menuListElm = list.map(item => (
    <Link to={item.path} key={item.path}>
      {item.name}
    </Link>
  ))

  return (
    <div className={style.menus}>
      {menuListElm}
    </div>
  )
}

export default Menus

