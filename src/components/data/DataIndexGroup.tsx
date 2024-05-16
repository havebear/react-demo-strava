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

interface DataIndexGroupProps extends ICommonProps {
  data: { [key: string]: number | string }
  columns: IColumn[]
}

const DataIndexGroup: React.FC<DataIndexGroupProps> = ({ columns = [], data = {}, reversal = false, align = 'left', border }) => {
  return (
    <div className={style.container}>
      {columns.map((item, index) => <DataIndex
        key={item.dataIndex}
        title={item.title}
        value={data[item.dataIndex]}
        unit={item.unit}
        reversal={reversal}
        align={align}
        border={border && index !== columns.length - 1} />)}
    </div>
  )
}

export default DataIndexGroup
