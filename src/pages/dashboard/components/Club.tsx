/*
 * @Author: BGG
 * @Date: 2024-03-19 16:00:51
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-14 15:56:02
 * @Description: 俱乐部列表
 */

import React from 'react'
import TitleBar from '../../../components/title/TitleBar'
import Avatar from '../../../components/avatar/Avatar'

import style from '../css/Club.module.less'

const Club: React.FC = () => {
  return (
    <div className={style.container}>
      <TitleBar title="你的俱乐部" />
      <Avatar src='https://dgalywyr863hv.cloudfront.net/pictures/clubs/589938/13748602/2/medium.jpg' />
      <Avatar src='https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/medium.jpg' />
    </div>
  )
};

export default Club
