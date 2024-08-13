/*
 * @Author: BGG
 * @Date: 2024-05-16 17:17:10
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-16 17:25:38
 * @Description: 活动基本信息
 */

import React from 'react'
import ActivityType from './ActivityType'
import ActivityData from './ActivityData'
import ActivityPersonalRecordList from './ActivityPersonalRecordList'
import style from './css/ActivityBaseInfo.module.less'

const ActivityBaseInfo: React.FC = () => {
  return (
    <div className={style.container}>
      {/* 活动类型 */}
      <div className={style.type}><ActivityType /></div>
      <div className={style.main}>
        {/* 活动标题 */}
        <div className={style.title}>Zwift - Foundation in Innsbruck</div>
        {/* 活动描述 */}
        <div className={style.content}>FTP237了 对上个月训练还是满意</div>
        {/* 活动数据 */}
        <ActivityData />
        {/* 个人纪录 */}
        <ActivityPersonalRecordList />
      </div>
    </div>
  )
}

export default ActivityBaseInfo
