/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 16:01:46
 * @Description: 仪表盘
 */

import React from 'react'
import UserPanel from './UserPanel'
import TrainingPanel from './TrainingPanel'
import Activity from './Activity'
import Challenge from './Challenge'
import Club from './Club'
import RecommendFriend from './RecommendFriend'
import About from './About'
import style from './css/index.module.less'

const Dashboard: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <UserPanel />
        <TrainingPanel />
      </div>
      <Activity />
      <div className={style.right}>
        <Challenge />
        <Club />
        <RecommendFriend />
        <About />
      </div>
    </div>
  )
}

export default Dashboard

