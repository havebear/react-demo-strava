/*
 * @Author: BGG
 * @Date: 2024-09-14 15:50:58
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 16:18:29
 * @Description: 挑战项
 */

import React from 'react'
import Avatar from '../../../components/avatar/Avatar'
import style from '../css/Challenge.module.less'

const ChallengeItem: React.FC = () => {
  return (
    <div className={style.challenge_item}>
      <Avatar />
      <div className={style.challenge_item_main}>
        <div className={style.challenge_item_title}>九月 Gran Fondo 挑战赛</div>
        <div className={style.challenge_item_remark}>326,935 participants</div>
      </div>
    </div>
  )
}

export default ChallengeItem
