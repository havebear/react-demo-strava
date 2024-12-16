/*
 * @Author: BGG
 * @Date: 2024-03-19 15:59:47
 * @LastEditors: BGG
 * @LastEditTime: 2024-10-12 14:41:13
 * @Description: 活动列表
 */

import React from 'react'
import ActivityItem from '../../components/activity/Activity'
import style from './css/Activity.module.less'

const Activity: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.action}>
        <span>Type</span>
        <span>Like</span>
      </div>
      <div>
        {[1, 2, 3].map(item => <ActivityItem key={item} />)}
      </div>
    </div>
  )
}

export default Activity
