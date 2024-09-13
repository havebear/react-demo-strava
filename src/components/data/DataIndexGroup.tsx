/*
 * @Author: BGG
 * @Date: 2024-05-08 14:20:00
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-16 16:31:20
 * @Description: 数据指标组
 */

import React from 'react'
import DataIndex from './DataIndex'
import style from './css/DataIndexGroup.module.less'
import { IColumn, ICommonProps } from './types'

interface IDataIndexGroupProps extends ICommonProps {
  data: { [key: string]: number | string }
  columns: IColumn[],
  flex?: boolean
}

const DataIndexGroup: React.FC<IDataIndexGroupProps> = ({
  columns = [],
  data = {},
  reversal = false,
  align = 'left',
  border = false,
  flex = false
}) => {
  return (
    <div className={`${style.container} ${flex ? style.flex : null}`}>
      {columns.map((item, index) => <DataIndex
        key={item.dataIndex}
        title={item.title}
        value={data[item.dataIndex]}
        unit={item.unit}
        reversal={reversal}
        align={align}
        span={item.span || 1}
        border={border && index !== columns.length - 1} />)}
    </div>
  )
}

export default DataIndexGroup
