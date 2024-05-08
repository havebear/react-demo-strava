/*
 * @Author: BGG
 * @Date: 2024-03-19 15:59:12
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 15:44:48
 * @Description: 训练面板
 */

import React from 'react'
import TrainingStatistics from './components/TrainingStatistics'
import style from './css/TrainingPanel.module.less'

const TrainingPanel: React.FC = () => {
  return (
    <div className={style.container}>
      <div>Tab</div>
      <TrainingStatistics />
      <div>管理你的目标</div>
    </div>
  )
};

export default TrainingPanel
