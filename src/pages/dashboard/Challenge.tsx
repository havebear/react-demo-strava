/*
 * @Author: BGG
 * @Date: 2024-03-19 16:00:25
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 15:52:35
 * @Description: 挑战列表
 */

import React from 'react'
import TitleBar from '../../components/title/TitleBar'
import ChallengeItem from './components/ChallengeItem'
import style from './css/Challenge.module.less'

const Challenge: React.FC = () => {

  const el = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <ChallengeItem key={item} />)

  return (
    <div className={style.container}>
      <TitleBar title="挑战列表" />
      {el}
    </div>
  )
};

export default Challenge
