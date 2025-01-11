/*
 * @Author: BGG
 * @Date: 2024-05-08 15:41:00
 * @LastEditors: BGG
 * @LastEditTime: 2025-01-11 18:09:47
 * @Description: 训练强度
 */

import React from 'react'
import SmallTitleBar from '../../../components/title/SmallTitleBar'
import style from '../css/TrainingPanel.module.less'
import { AreaChart, Area, Tooltip } from 'recharts'

const data = [
  {
    'name': 'Page A',
    'uv': 4000
  },
  {
    'name': 'Page B',
    'uv': 3000
  },
  {
    'name': 'Page C',
    'uv': 2000
  },
  {
    'name': 'Page D',
    'uv': 2780
  },
  {
    'name': 'Page E',
    'uv': 1890
  },
  {
    'name': 'Page F',
    'uv': 2390
  },
  {
    'name': 'Page G',
    'uv': 3490
  }
]

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
      <div className={style.chart}>
        <AreaChart width={330} height={150} data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </div>
    </div>
  )
}

export default TrainingTntensity
