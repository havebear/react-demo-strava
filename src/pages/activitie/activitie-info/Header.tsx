/*
 * @Author: BGG
 * @Date: 2024-04-29 14:15:30
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-25 14:37:38
 * @Description: 头部
 */

import React from 'react'
import style from '../css/ActivitieInfo.module.less'

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <span>张三</span>
      <span>骑行</span>
      <span>评论</span>
      <span>点赞</span>
      <span>收起</span>
    </div>
  )
}

export default Header

