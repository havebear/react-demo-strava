/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-03-19 16:07:41
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
import './css/index.css'

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard-container'>
      <div>
        <UserPanel />
        <TrainingPanel />
      </div>
      <ActivityList />
      <div>
        <ChallengeList />
        <ClubList />
        <RecommendFriend />
        <About />
      </div>
    </div>
  )
};

export default Dashboard

