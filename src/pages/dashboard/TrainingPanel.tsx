/*
 * @Author: BGG
 * @Date: 2024-03-19 15:59:12
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-13 17:51:35
 * @Description: 训练面板
 */

import React from 'react'
import TrainingStatistics from './components/TrainingStatistics'
import LinkCard from '../../components/card/LinkCard'
import style from './css/TrainingPanel.module.less'

const TrainingPanel: React.FC = () => {
  return (
    <div className={style.container}>
      <div>Tab</div>
      <TrainingStatistics />
      <LinkCard title="管理你的目标" />
    </div>
  )
};

export default TrainingPanel
