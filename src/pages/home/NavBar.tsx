/*
 * @Author: BGG
 * @Date: 2024-03-14 15:43:32
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-11 14:43:59
 * @Description: 导航栏
 */

import React from 'react'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import GlobalNav from './components/GlobalNav'
import UserNav from './components/UserNav'

import style from './css/NavBar.module.less'

const NavBar: React.FC = () => {
  return (
    <nav className={style.nav_bar}>
      <Logo />
      <SearchBar />
      <GlobalNav />
      <div className={style.fill_bar}></div>
      <UserNav />
    </nav>
  )
}

export default NavBar
