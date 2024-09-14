/*
 * @Author: BGG
 * @Date: 2024-05-08 11:15:01
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 11:17:39
 * @Description: 链接卡片
 */

import React from 'react'
import style from './css/LinkCard.module.less'

interface ILinkCardProps {
  title: string
}


const LinkCard: React.FC<ILinkCardProps> = ({ title }) => {
  return (
    <div className={style.link_card}>
      <span className={style.link_card_title}>{title}</span>
      <img className={style.link_card_arrow} src="/images/icon_arrow_right.png" />
    </div>
  )
}

export default LinkCard
