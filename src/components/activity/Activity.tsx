/*
 * @Author: BGG
 * @Date: 2024-03-19 15:59:47
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 14:14:36
 * @Description: 活动项
 */

import React from 'react'
import Card from '../card/Card'
import ActivityReleaseInfo from './ActivityReleaseInfo'
import ActivityBaseInfo from './ActivityBaseInfo'
import ActivityChallenge from './ActivityChallenge'
import ActivityImageList from './ActivityImageList'
import ActivityInteraction from './ActivityInteraction'

const Activity: React.FC = () => {
  return (
    <Card bottomMargin paddingM>
      {/* 发布信息 */}
      <ActivityReleaseInfo />
      {/* 基本信息 */}
      <ActivityBaseInfo />
      {/* 挑战信息 */}
      <ActivityChallenge />
      {/* 活动图片 */}
      <ActivityImageList />
      {/* 互动板块 */}
      <ActivityInteraction />
    </Card>
  )
}

export default Activity
