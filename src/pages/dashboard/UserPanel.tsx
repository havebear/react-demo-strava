/*
 * @Author: BGG
 * @Date: 2024-03-19 15:59:12
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 14:30:01
 * @Description: 用户面板
 */

import React from 'react'
import Avatar from '../../components/avatar/Avatar'
import DataIndexGroup from '../../components/data/DataIndexGroup'
import style from './css/UserPanel.module.less'

const UserPanel: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.avatar}>
        <Avatar />
        <span>AcFun优质用户</span>
      </div>
      {/* 用户统计信息 */}
      <DataIndexGroup />
      {/* 最近一次活动 */}
      <div>最近一次活动</div>
      {/* 训练日志入口 */}
      <div>你的训练日志</div>
    </div>
  )
}

export default UserPanel
