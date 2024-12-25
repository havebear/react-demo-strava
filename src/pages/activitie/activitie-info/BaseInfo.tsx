/*
 * @Author: BGG
 * @Date: 2024-04-29 14:15:30
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-25 14:45:13
 * @Description: 基本信息
 */

import React from 'react'
import Avatar from 'antd/es/avatar/avatar'
import style from '../css/ActivitieInfo.module.less'

const BaseInfo: React.FC = () => {
  return (
    <div className={style.activitie_info}>
      <Avatar size={60} src='https://dgalywyr863hv.cloudfront.net/pictures/athletes/117387103/27459842/3/large.jpg' />
      <div className={style.activitie_info_main}>
        <div className=''>2024年12月17日 星期二 上午10:00 龙泉驿区, 四川省</div>
        <div>龙泉-德阳凯江大回湾</div>
        <div>
          最近最后一个太阳天，必须放假骑车哦。
          带根自拍杆休闲骑拍合照还是安逸😆
          中午吃勇记干锅✌️
          今天又有人扎胎，我最近四次出来骑车都有人扎胎🥲
        </div>
        <div>
          Images
        </div>
      </div>
    </div>
  )
}

export default BaseInfo

