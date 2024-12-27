/*
 * @Author: BGG
 * @Date: 2024-05-08 15:41:00
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-27 16:32:42
 * @Description: 训练强度
 */

import React from 'react'
import style from '../css/TrainingPanel.module.less'

const TrainingTntensity: React.FC = () => {
  return (
    <div className={style.container}>
      <div>相对负荷度</div>
      <div>
        上周
        有上升趋势
        根据你的心率数据，你上周的训练强度高于往常。倾向于超越。
      </div>
      <div>Chart</div>
    </div>
  )
}

export default TrainingTntensity
