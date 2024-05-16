/*
 * @Author: BGG
 * @Date: 2024-05-08 14:15:15
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 14:15:15
 * @Description: 标题栏
 */

import React from 'react'
import style from './css/TitleBar.module.less'

const TitleBar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={style.container}>
      <span>{title}</span>
      <span></span>
    </div>
  )
}

export default TitleBar
