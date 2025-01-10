/*
 * @Author: BGG
 * @Date: 2024-05-08 15:41:00
 * @LastEditors: BGG
 * @LastEditTime: 2025-01-10 22:48:25
 * @Description: 今年数据
 */

import React from 'react'
import style from '../css/TrainingPanel.module.less'

const TrainingStatistics: React.FC = () => {
  return (
    <div className={style.container}>
      <div>今年</div>
      <div>0/0公里</div>
      <div>6小时56分钟 | 1110米</div>
    </div>
  )
}

export default TrainingStatistics
