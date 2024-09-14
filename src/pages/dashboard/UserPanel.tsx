/*
 * @Author: BGG
 * @Date: 2024-03-19 15:59:12
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 14:08:36
 * @Description: 用户面板
 */

import React from 'react'
import Card from '../../components/card/Card'
import Avatar from '../../components/avatar/Avatar'
import DataIndexGroup from '../../components/data/DataIndexGroup'
import style from './css/UserPanel.module.less'
import LinkCard from '../../components/card/LinkCard'
import { IColumn } from '../../components/data/types'
import { KILOMETRE, METER } from '../../config/base.config'

const data = {
  a: 26,
  b: 30,
  c: 755
}

const columns: IColumn[] = [
  { title: '正在关注', dataIndex: 'a', unit: KILOMETRE },
  { title: '关注者', dataIndex: 'b', unit: METER },
  { title: '活动', dataIndex: 'c' }
]

const UserPanel: React.FC = () => {
  return (
    <Card bottomMargin>
      <div className={style.user}>
        <span className={style.user_avatar}>
          <Avatar />
        </span>
        <span className={style.user_name}>AcFun优质用户</span>
      </div>
      {/* 用户统计信息 */}
      <div className={style.user_total}>
        <DataIndexGroup columns={columns} data={data} flex align="center" border />
      </div>
      <div className={style.user_active}>
        {/* 最近一次活动 */}
        <div className={style.last_active}>
          <div className={style.last_active_header}>最近一次活动</div>
          <div className={style.last_active_main}>
            <div className={style.last_active_title}>Zwift - Big Flat 8 in Watopia</div>
            <div className={style.last_active_time}>2024年9月12日</div>
          </div>
        </div>
        {/* 训练日志入口 */}
        <LinkCard title="你的训练日志" />
      </div>
    </Card>
  )
}

export default UserPanel
