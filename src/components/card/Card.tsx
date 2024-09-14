/*
 * @Author: BGG
 * @Date: 2024-09-14 13:58:37
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 14:07:31
 * @Description: 卡片
 */

import React from 'react'
import style from './css/Card.module.less'

interface ICard {
  children?: React.ReactNode;
  bottomMargin?: boolean;
  paddingS?: boolean;
  paddingM?: boolean;
  paddingL?: boolean;

}

const Card: React.FC<ICard> = ({ children, bottomMargin, paddingS, paddingM, paddingL }) => {
  return (
    <div className={`
      ${style.card}
      ${bottomMargin ? style.card_bottom_margin : ''}
      ${paddingS ? style.card_padding_s : ''}
      ${paddingM ? style.card_padding_m : ''}
      ${paddingL ? style.card_padding_l : ''}`}>
      {children}
    </div>
  )
}

export default Card
