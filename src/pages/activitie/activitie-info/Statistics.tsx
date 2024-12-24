/*
 * @Author: BGG
 * @Date: 2024-04-29 14:15:30
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-24 15:58:32
 * @Description: 活动统计
 */

import React from 'react'
import DataIndexGroup from '../../../components/data/DataIndexGroup'
import style from '../css/index.module.less'
import { IColumn } from '../../../components/data/types'
import { KILOMETRE, METER, KJ, TSS, POWER, PERCENTAGE } from '../../../config/base.config'

const data = {
  a: 40.16,
  b: 111,
  c: '6:35:43',
  d: 211,
  e: 168,
  f: 3670,
  g: 379,
  h: 70
}

const columns: IColumn[] = [
  { title: '距离', dataIndex: 'a', unit: KILOMETRE },
  { title: '移动时间', dataIndex: 'c' },
  { title: '海拔', dataIndex: 'b', unit: METER },
  { title: '历史相对负荷度', dataIndex: 'd', unit: TSS }
]

const columns2: IColumn[] = [
  { title: '加权平均功率', dataIndex: 'e', unit: POWER },
  { title: '总功', dataIndex: 'f', unit: KJ },
  { title: '训练负荷', dataIndex: 'g', unit: TSS },
  { title: '强度', dataIndex: 'h', unit: PERCENTAGE }
]

const Statistics: React.FC = () => {
  return (
    <div className={style.activitie_info}>
      <DataIndexGroup columns={columns} data={data} reversal />
      <DataIndexGroup columns={columns2} data={data} reversal />
    </div>
  )
}

export default Statistics

