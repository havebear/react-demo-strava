/*
 * @Author: BGG
 * @Date: 2024-05-16 17:17:10
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-16 16:08:46
 * @Description: 活动基本信息
 */

import React from 'react'
import ActivityType from './ActivityType'
import ActivityData from './ActivityData'
import ActivityPersonalRecordList from './ActivityPersonalRecordList'
import style from './css/ActivityBaseInfo.module.less'
import { Link } from 'react-router-dom'

const ActivityBaseInfo: React.FC = () => {
  return (
    <div className={style.container}>
      {/* 活动类型 */}
      <div className={style.type}><ActivityType /></div>
      <div className={style.main}>
        {/* 活动标题 */}
        <Link className={style.title} to={'/activities/1'}>Zwift - Foundation in Innsbruck</Link>
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
