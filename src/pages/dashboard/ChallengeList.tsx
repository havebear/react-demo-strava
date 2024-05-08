/*
 * @Author: BGG
 * @Date: 2024-03-19 16:00:25
 * @LastEditors: BGG
 * @LastEditTime: 2024-05-08 15:03:00
 * @Description: 挑战列表
 */

import React from 'react'
import TitleBar from '../../components/title/TitleBar'
import style from './css/ChallengeList.module.less'

const ChallengeList: React.FC = () => {
  return (
    <div className={style.container}>
      <TitleBar title="挑战列表" />
    </div>
  )
};

export default ChallengeList
