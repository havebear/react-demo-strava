/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-16 16:16:18
 * @Description: 仪表盘
 */

import React from 'react'
import PageContainer from '../../components/wrap/PageContainer'
import UserPanel from './components/UserPanel'
import TrainingPanel from './components/TrainingPanel'
import Activity from './components/Activity'
import Challenge from './components/Challenge'
import Club from './components/Club'
import RecommendFriend from './components/RecommendFriend'
import About from './components/About'
import style from './css/index.module.less'

const Dashboard: React.FC = () => {
  return (
    <PageContainer flex>
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
    </PageContainer>
  )
}

export default Dashboard

