/*
 * @Author: BGG
 * @Date: 2024-05-08 14:15:15
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 14:15:15
 * @Description: 活动发布信息
 */

import React from 'react'
import Avatar from '../avatar/Avatar'
import style from './css/ActivityReleaseInfo.module.less'

const ActivityReleaseInfo: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.avatar}>
        <Avatar />
      </div>
      <div>
        <div className={style.user}>AcFun优质用户</div>
        <div className={style.time}>今天于 上午9:28 · Shiyang, 四川省</div>
      </div>
      <div>Action</div>
    </div>
  )
}

export default ActivityReleaseInfo
