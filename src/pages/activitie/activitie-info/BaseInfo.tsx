/*
 * @Author: BGG
 * @Date: 2024-04-29 14:15:30
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-20 17:21:41
 * @Description: 基本信息
 */

import React from 'react'
import Avatar from 'antd/es/avatar/avatar'
import style from '../css/index.module.less'

const BaseInfo: React.FC = () => {
  return (
    <div className={style.activitie_info}>
      <Avatar icon="user" />
      BaseInfo
    </div>
  )
}

export default BaseInfo

