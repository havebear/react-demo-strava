/*
 * @Author: BGG
 * @Date: 2024-09-14 13:58:37
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 14:07:31
 * @Description: 卡片
 */

import React from 'react'
import style from './css/Card.module.less'

interface ICardProps {
  children?: React.ReactNode;
  bottomMargin?: boolean;
  padding?: null | 's' |'m' | 'l'
}

const Card: React.FC<ICardProps> = ({ children, bottomMargin, padding }) => {

  const cardClass = `${bottomMargin? style.card_bottom_margin : ''} ${padding? style[`card_padding_${padding}`] : ''}`

  return (
    <div className={`${style.card} ${cardClass}`}>
      {children}
    </div>
  )
}

export default Card
