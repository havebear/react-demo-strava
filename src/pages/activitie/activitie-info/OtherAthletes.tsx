/*
 * @Author: BGG
 * @Date: 2024-04-29 14:15:30
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-20 17:22:57
 * @Description: 其他用户
 */

import React from 'react'
import Avatar from 'antd/es/avatar/avatar'
import style from '../css/index.module.less'

const OtherAthletes: React.FC = () => {
  return (
    <div className={style.activitie_info}>
      <Avatar icon="user" />
      <Avatar icon="user" />
      <Avatar icon="user" />
      <Avatar icon="user" />
    </div>
  )
}

export default OtherAthletes

