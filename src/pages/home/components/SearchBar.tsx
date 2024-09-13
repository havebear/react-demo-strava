/*
 * @Author: BGG
 * @Date: 2024-09-11 14:30:43
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-13 15:00:54
 * @Description: 搜索栏
 */

import React from 'react'
import style from '../css/SearchBar.module.less'

const SEATCH_ICON = '/images/icon_search.png'
const CLOSE_ICON = '/images/icon_close.png'


const SearchBar: React.FC = () => {

  const [status, setStatus] = React.useState(false)

  // 切换状态，控制搜索框显示隐藏
  const switchStatus = () => {
    setStatus(!status)
  }

  // 正常状态
  const normalEl = (
    <img
      className={style.search_icon}
      src={SEATCH_ICON}
      onClick={switchStatus} />
  )

  // 搜索状态
  const activeEl = (
    <div className={style.search_active}>
      <div>Select</div>
      <div className={style.search_input_wrap}>
        <input className={style.search_input} placeholder="搜索" />
        <img className={`${style.search_icon} ${style.search_btn}`} src={SEATCH_ICON} onClick={switchStatus} />
      </div>
      <img className={`${style.search_icon} ${style.search_close}`} src={CLOSE_ICON} onClick={switchStatus} />
    </div>
  )

  return (
    <div className={style.search}>
      { status ? activeEl : normalEl }
    </div>
  )
}

export default SearchBar
