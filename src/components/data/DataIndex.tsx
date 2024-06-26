/*
 * @Author: BGG
 * @Date: 2024-05-08 14:19:22
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-16 17:44:44
 * @Description: 数据指标
 */

import React from 'react'
import style from './css/DataIndex.module.less'
import { ICommonProps } from './types'

export interface DataIndexProps extends ICommonProps {
  title?: string
  value?: number | string
  unit?: string,
  valueContent?: React.ReactNode
  span?: number // 占比
}

const DataIndex: React.FC<DataIndexProps> = ({
  align = 'left',
  title,
  value,
  unit,
  border = false,
  reversal = false,
  valueContent,
  span = 1
}) => {
  const rValue = valueContent || <div>{value}{unit || ''}</div>
  const wrapStyle = { textAlign: align, flex: span }

  return (
    <div className={`${style.container} ${border ? style.border : ''}`} style={wrapStyle}>
      {reversal ? (rValue) : null}
      <div>{title}</div>
      {!reversal ? rValue : null}
    </div>
  )
}

export default DataIndex
