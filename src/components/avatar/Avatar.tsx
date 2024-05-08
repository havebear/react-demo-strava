/*
 * @Author: BGG
 * @Date: 2024-05-08 11:15:01
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 14:41:33
 * @Description: 头像
 */

import React from 'react'
import style from  './css/Avatar.module.less'

const Avatar: React.FC = () => {
  return (
    <div className={style.container}>
      <img src="/images/avatar.jpg" />
    </div>
  )
}

export default Avatar
