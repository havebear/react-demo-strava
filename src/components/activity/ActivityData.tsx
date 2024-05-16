/*
 * @Author: BGG
 * @Date: 2024-05-08 14:39:40
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-16 16:32:35
 * @Description: 活动数据，需要根据活动类型展示不同的数据
 */

import React from 'react'
import DataIndexGroup from '../data/DataIndexGroup'
import style from './css/ActivityData.module.less'
import { IColumn } from '../data/types'
import { KILOMETRE, METER } from '../../config/base.config'

const data = {
  a: 40.16,
  b: 111,
  c: '1h17m'
}

const columns: IColumn[] = [
  { title: '距离', dataIndex: 'a', unit: KILOMETRE },
  { title: '爬升海拔', dataIndex: 'b', unit: METER },
  { title: '时间', dataIndex: 'c' }
]

const ActivityData: React.FC = () => {
  return (
    <div className={style.container}>
      <DataIndexGroup columns={columns} data={data} border />
      <div>RIGHT</div>
    </div>
  )
}

export default ActivityData
