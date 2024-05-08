/*
 * @Author: BGG
 * @Date: 2024-03-19 16:01:28
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 15:09:11
 * @Description: 推荐好友
 */

import React from 'react'
import TitleBar from '../../components/title/TitleBar'
import style from './css/RecommendFriend.module.less'

const RecommendFriend: React.FC = () => {
  return (
    <div className={style.container}>
      <TitleBar title="推荐好友" />
    </div>
  )
};

export default RecommendFriend
