/*
 * @Author: BGG
 * @Date: 2024-05-08 14:19:22
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-13 17:45:11
 * @Description: 数据指标
 */

import React from 'react'
import style from './css/DataIndex.module.less'
import { ICommonProps } from './types'

export interface IDataIndexProps extends ICommonProps {
  title?: string
  value?: number | string
  unit?: string,
  valueContent?: React.ReactNode
  span?: number // 占比
}

const DataIndex: React.FC<IDataIndexProps> = ({
  align = 'left',
  title,
  value,
  unit,
  border = false,
  reversal = false,
  valueContent,
  span = 1
}) => {
  const rValue = valueContent || <div className={style.value}>{value}{unit || ''}</div>
  const wrapStyle = { textAlign: align, flex: span }

  return (
    <div className={`${style.container} ${border ? style.border : ''}`} style={wrapStyle}>
      {reversal ? (rValue) : null}
      <div className={style.title}>{title}</div>
      {!reversal ? rValue : null}
    </div>
  )
}

export default DataIndex
