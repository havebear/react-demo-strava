/*
 * @Author: BGG
 * @Date: 2024-05-08 11:15:01
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-13 17:48:36
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
      <img className={style.link_card_arrow} src="/images/icon_close.png" />
    </div>
  )
}

export default LinkCard
