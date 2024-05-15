/*
 * @Author: BGG
 * @Date: 2024-05-08 14:39:40
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 14:39:40
 * @Description: 活动交互，包含点赞和评论
 */

import React from 'react'
import style from  './css/ActivityInteraction.module.less'

const ActivityType: React.FC = () => {
  return (
    <div className={style.container}>
      <div>
        <div>点赞列表</div>
        <div>点赞/评论</div>
      </div>
      <div>评论列表</div>
    </div>
  )
}

export default ActivityType
