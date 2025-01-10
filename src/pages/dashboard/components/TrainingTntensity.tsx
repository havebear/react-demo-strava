/*
 * @Author: BGG
 * @Date: 2024-05-08 15:41:00
 * @LastEditors: BGG
 * @LastEditTime: 2025-01-10 22:44:25
 * @Description: 训练强度
 */

import React from 'react'
import SmallTitleBar from '../../../components/title/SmallTitleBar'
import style from '../css/TrainingPanel.module.less'

const TrainingTntensity: React.FC = () => {

  const extra = <span>ICON</span>

  return (
    <div className={style.container}>
      <SmallTitleBar title="相对负荷度" extra={extra} />
      <div>
        <div className={style.time}>上周</div>
        <div className={style.trend}>有上升趋势</div>
        <div className={style.desc}>根据你的心率数据，你上周的训练强度高于往常。倾向于超越。</div>
      </div>
      <div>Chart</div>
    </div>
  )
}

export default TrainingTntensity
