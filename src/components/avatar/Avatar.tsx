/*
 * @Author: BGG
 * @Date: 2024-05-08 11:15:01
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-27 16:35:06
 * @Description: 头像
 */

import React from 'react'
import style from './css/Avatar.module.less'

interface IAvatarProps {
  size?: number,
  src?: string
}


const Avatar: React.FC<IAvatarProps> = ({ size = 40, src = '/images/avatar.jpg' }) => {

  const styleObj = {
    width: size + 'px',
    height: size + 'px'
  }

  return (
    <div className={style.avatar} style={styleObj}>
      <img src={src} />
    </div>
  )
}

export default Avatar
