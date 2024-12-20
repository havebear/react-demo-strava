/*
 * @Author: BGG
 * @Date: 2024-04-29 14:15:30
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-20 17:09:36
 * @Description: 活动信息
 */

import React from 'react'
import Header from './Header'
import BaseInfo from './BaseInfo'
import OtherAthletes from './OtherAthletes'
import Comments from './Comments'
import Statistics from './Statistics'
import MoreStatistics from './MoreStatistics'
import Achievements from './Achievements'
import style from '../css/ActivitieInfo.module.less'

const ActivitieInfo: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.main}>
        <div>
          <BaseInfo />
          <OtherAthletes />
          <Comments />
        </div>
        <div>
          <Statistics />
          <MoreStatistics />
        </div>
      </div>
      <Achievements />
    </div>
  )
}

export default ActivitieInfo

