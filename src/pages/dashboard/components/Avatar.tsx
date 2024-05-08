/*
 * @Author: BGG
 * @Date: 2024-05-08 11:15:01
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 11:31:23
 * @Description: 头像
 */

import React from 'react'
import style from  '../css/Avatar.module.less'

const Avatar: React.FC = () => {
  return (
    <div className={style.container}>
      <img src="/images/avatar.jpeg" />
    </div>
  )
}

export default Avatar
