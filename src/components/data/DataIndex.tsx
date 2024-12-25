/*
 * @Author: BGG
 * @Date: 2024-05-08 14:19:22
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-25 14:26:22
 * @Description: 数据指标
 */

import React from 'react'
import style from './css/DataIndex.module.less'
import { ICommonProps } from './types'
import { getCssVariable } from '../../utils/dom'
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
  span = 1,
  titleFontSize = getCssVariable('--font-size-xs'),
  valueFontSize = getCssVariable('--font-size-title'),
  unitFontSize = getCssVariable('--font-size-title')
}) => {
  console.log(getCssVariable('--font-size-xs'))
  const rValue = valueContent || (
    <div className={style.value}>
      <span style={{ fontSize: valueFontSize }}>{value}</span>
      {unit ? <span className={style.unit} style={{ fontSize: unitFontSize }}>{unit}</span> : null}
    </div>
  )
  const wrapStyle = { textAlign: align, flex: span }

  return (
    <div className={`${style.container} ${border ? style.border : ''}`} style={wrapStyle}>
      {reversal ? (rValue) : null}
      <div className={style.title} style={{ fontSize: titleFontSize }}>{title}</div>
      {!reversal ? rValue : null}
    </div>
  )
}

export default DataIndex
