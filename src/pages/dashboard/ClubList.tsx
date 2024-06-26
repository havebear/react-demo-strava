/*
 * @Author: BGG
 * @Date: 2024-03-19 16:00:51
 * @LastEditors: BGG
 * @LastEditTime: 2024-03-19 16:01:00
 * @Description: 俱乐部列表
 */

import React from 'react'
import TitleBar from '../../components/title/TitleBar'
import style from './css/ClubList.module.less'

const ClubList: React.FC = () => {
  return (
    <div className={style.container}>
      <TitleBar title="你的俱乐部" />
    </div>
  )
};

export default ClubList
