/*
 * @Author: BGG
 * @Date: 2024-03-19 15:59:47
 * @LastEditors: BGG
 * @LastEditTime: 2024-03-19 15:59:48
 * @Description: 活动列表
 */

import React from 'react'
import Activity from '../../components/activity/Activity'
import style from './css/ActivityList.module.less'

const ActivityList: React.FC = () => {
  return (
    <div className={style.container}>
      {[1, 2, 3].map(item => <Activity key={item} />)}
    </div>
  )
}

export default ActivityList
