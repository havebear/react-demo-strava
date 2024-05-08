/*
 * @Author: BGG
 * @Date: 2024-03-19 15:59:47
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 11:21:01
 * @Description: 活动项
 */

import React from 'react'
import Avatar from './Avatar'
import style from  '../css/Activity.module.less'

const Activity: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.avatar}>
          <Avatar />
        </div>
      </div>
    </div>
  )
}

export default Activity
