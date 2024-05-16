/*
 * @Author: BGG
 * @Date: 2024-05-08 14:19:22
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-16 16:19:35
 * @Description: 数据指标
 */

import React from 'react'
import style from './css/DataIndex.module.less'
import { ICommonProps } from './types'

export interface DataIndexProps extends ICommonProps {
  title: string
  value: number | string
  unit?: string
}

const DataIndex: React.FC<DataIndexProps> = ({ align, title, value, unit, border, reversal }) => {
  const rValue = <div>{value}{unit || ''}</div>
  const wrapStyle = { textAlign: align }

  return (
    <div className={`${style.container} ${border ? style.border : ''}`} style={wrapStyle}>
      {reversal ? rValue : null}
      <div>{title}</div>
      {!reversal ? rValue : null}
    </div>
  )
}

export default DataIndex
