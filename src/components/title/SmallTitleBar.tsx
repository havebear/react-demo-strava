/*
 * @Author: BGG
 * @Date: 2024-05-08 14:15:15
 * @LastEditors: BGG
 * @LastEditTime: 2025-01-10 22:40:35
 * @Description: 标题栏
 */

import React from 'react'
import style from './css/SmallTitleBar.module.less'

interface SmallTitleBarProps {
  title: string
  extra?: React.ReactNode
}

const SmallTitleBar: React.FC<SmallTitleBarProps> = ({ title, extra }) => {
  return (
    <div className={style.container}>
      <span className={style.title}>{title}</span>
      <span>{extra}</span>
    </div>
  )
}

export default SmallTitleBar
