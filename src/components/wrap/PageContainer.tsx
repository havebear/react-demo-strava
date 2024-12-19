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
  flex?: boolean;
  paddingTop: string;
}

const PageContainer: React.FC<IPageContainer> = ({ children, flex = false, paddingTop = '0' }) => {
  return (
    <div className={`${style.container} ${flex ? style.flex : ''}`} style={{ paddingTop }}>
      {children}
    </div>
  )
}

export default PageContainer
