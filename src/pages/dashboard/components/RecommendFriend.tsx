/*
 * @Author: BGG
 * @Date: 2024-03-19 16:01:28
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 16:53:15
 * @Description: 推荐好友
 */

import React from 'react'
import TitleBar from '../../../components/title/TitleBar'
import RecommendFriendItem from './RecommendFriendItem'
import style from '../css/RecommendFriend.module.less'

const RecommendFriend: React.FC = () => {

  const el = [1, 2, 3].map(item => <RecommendFriendItem key={item} />)

  return (
    <div className={style.container}>
      <TitleBar title="推荐好友" />
      {el}
    </div>
  )
};

export default RecommendFriend
