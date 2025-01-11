/*
 * @Author: BGG
 * @Date: 2024-05-08 15:41:00
 * @LastEditors: BGG
 * @LastEditTime: 2025-01-11 18:22:07
 * @Description: 训练统计
 */

import React from 'react'
import SmallTitleBar from '../../../components/title/SmallTitleBar'
import CurrentYearData from './CurrentYearData'
import style from '../css/TrainingPanel.module.less'
import { BarChart, Bar, Tooltip } from 'recharts'

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

const TrainingStatistics: React.FC = () => {
  return (
    <div className={style.container}>
      <SmallTitleBar title="目标" />
      <div className={style.chart}>
        <BarChart width={330} height={150} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Bar dataKey="uv" fill="#82ca9d" width={20} />
        </BarChart>
      </div>
      <CurrentYearData />
    </div>
  )
}

export default TrainingStatistics
