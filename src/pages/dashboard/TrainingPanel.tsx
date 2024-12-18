/*
 * @Author: BGG
 * @Date: 2024-03-19 15:59:12
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 14:21:08
 * @Description: 训练面板
 */

import React, { useState } from 'react'
import Card from '../../components/card/Card'
import TrainingStatistics from './components/TrainingStatistics'
import LinkCard from '../../components/card/LinkCard'
import style from './css/TrainingPanel.module.less'

interface ITab {
  title: string,
  name: string
}

const tabs: Array<ITab> = [
  { title: '统计', name: 'Total' },
  { title: '骑行', name: 'Cycling' },
  { title: '跑步', name: 'Running' },
  { title: '游泳', name: 'Swimming' }
]

const TrainingPanel: React.FC = () => {
  const [current, setCurrent] = useState(tabs[0].name)

  const tabsEl = tabs.map(item => (
    <div
      className={`${style.tab_item} ${current === item.name ? style.tab_item_active : ''}`}
      onClick={() => setCurrent(item.name)}
      key={item.name}>
      {item.title}
    </div>
  ))

  return (
    <Card>
      <div className={style.tab_header}>
        {tabsEl}
      </div>
      <div className={style.tab_main}>
        <TrainingStatistics />
      </div>
      <div className={style.target_link}>
        <LinkCard title="管理你的目标" />
      </div>
    </Card>
  )
}

export default TrainingPanel
