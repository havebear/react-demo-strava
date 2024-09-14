/*
 * @Author: BGG
 * @Date: 2024-09-14 15:50:58
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 16:13:37
 * @Description: 推荐好友项
 */

import React from 'react'
import Avatar from '../../../components/avatar/Avatar'
import style from '../css/RecommendFriend.module.less'

const RecommendFriend: React.FC = () => {
  return (
    <div className={style.rf_item}>
      <Avatar />
      <div className={style.rf_item_main}>
        <span className={style.rf_item_title}>张三</span>
        <div className={style.rf_item_content}>You have mutual friends on Strava</div>
      </div>
    </div>
  )
}

export default RecommendFriend
