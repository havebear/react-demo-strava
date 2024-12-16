/*
 * @Author: BGG
 * @Date: 2024-09-11 14:34:24
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-16 16:19:38
 * @Description: Logo
 */

import React from 'react'
import style from '../css/Nav.module.less'
import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link to="/dashboard">
      <img
        className={style.logo}
        src="/images/logo.png"
        title="返回至 strava 首页" />
    </Link>
  )
}

export default Logo
