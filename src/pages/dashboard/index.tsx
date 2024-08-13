/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-07-11 14:52:19
 * @Description: 仪表盘
 */

import React from 'react'
import UserPanel from './UserPanel'
import TrainingPanel from './TrainingPanel'
import ActivityList from './ActivityList'
import ChallengeList from './ChallengeList'
import ClubList from './ClubList'
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
      <ActivityList />
      <div className={style.right}>
        <ChallengeList />
        <ClubList />
        <RecommendFriend />
        <About />
      </div>
    </div>
  )
}

export default Dashboard

