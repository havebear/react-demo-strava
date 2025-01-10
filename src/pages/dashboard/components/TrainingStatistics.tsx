/*
 * @Author: BGG
 * @Date: 2024-05-08 15:41:00
 * @LastEditors: BGG
 * @LastEditTime: 2025-01-10 22:50:28
 * @Description: 训练统计
 */

import React from 'react'
import SmallTitleBar from '../../../components/title/SmallTitleBar'
import CurrentYearData from './CurrentYearData'
import style from '../css/TrainingPanel.module.less'

const TrainingStatistics: React.FC = () => {
  return (
    <div className={style.container}>
      <SmallTitleBar title="目标" />
      <div>Chart</div>
      <CurrentYearData />
    </div>
  )
}

export default TrainingStatistics
