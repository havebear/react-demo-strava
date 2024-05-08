/*
 * @Author: BGG
 * @Date: 2024-03-19 15:59:47
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 14:52:49
 * @Description: 活动项
 */

import React from 'react'
import ActivityReleaseInfo from './ActivityReleaseInfo'
import ActivityType from './ActivityType'
import ActivityData from './ActivityData'
import ActivityPersonalRecords from './ActivityPersonalRecords'
import ActivityChallenge from './ActivityChallenge'
import ActivityImageList from './ActivityImageList'
import ActivityInteraction from './ActivityInteraction'
import style from  './css/Activity.module.less'

const Activity: React.FC = () => {
  return (
    <div className={style.container}>
      {/* 发布信息 */}
      <ActivityReleaseInfo />
      {/* 活动信息 */}
      <div>
        {/* 活动类型 */}
        <div><ActivityType /></div>
        <div>
          {/* 活动标题 */}
          <div>Zwift - Foundation in Innsbruck</div>
          {/* 活动描述 */}
          <div>FTP237了 对上个月训练还是满意</div>
          {/* 活动数据 */}
          <ActivityData />
        </div>
      </div>
      {/* 个人纪录 */}
      <ActivityPersonalRecords />
      {/* 挑战信息 */}
      <ActivityChallenge />
      {/* 活动图片 */}
      <ActivityImageList />
      {/* 互动板块 */}
      <ActivityInteraction />
    </div>
  )
}

export default Activity
