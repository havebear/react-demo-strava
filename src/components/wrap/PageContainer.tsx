/*
 * @Author: BGG
 * @Date: 2024-05-08 14:15:15
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 14:15:15
 * @Description: 页面容器
 */

import React from 'react'
import style from './css/PageContainer.module.less'

interface IPageContainer {
  children?: React.ReactNode;
}

const PageContainer: React.FC<IPageContainer> = ({ children }) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default PageContainer
