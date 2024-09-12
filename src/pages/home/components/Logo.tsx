/*
 * @Author: BGG
 * @Date: 2024-09-11 14:34:24
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-11 15:15:11
 * @Description: Logo
 */

import React from 'react'
import style from '../css/Nav.module.less'

const Logo: React.FC = () => {
  return (
    <img
      className={style.logo}
      src="/images/logo.png"
      title="返回至 strava 首页" />
  )
}

export default Logo
