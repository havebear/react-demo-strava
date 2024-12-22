/*
 * @Author: BGG
 * @Date: 2024-04-29 14:15:30
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-22 20:33:29
 * @Description: 基本信息
 */

import React from 'react'
import Avatar from 'antd/es/avatar/avatar'
import style from '../css/index.module.less'

const BaseInfo: React.FC = () => {
  return (
    <div className={style.activitie_info}>
      <Avatar icon="user" size={60} />
      <div>
        <div>2024年12月17日 星期二 上午10:00 龙泉驿区, 四川省</div>
        <div>心率不能作为心率标准的关键是，心率会受到很多因素的影响而有偏差，包括但不限于气温，休息情况，疾病，时间段等。</div>
      </div>
    </div>
  )
}

export default BaseInfo

