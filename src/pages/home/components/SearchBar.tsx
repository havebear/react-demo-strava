/*
 * @Author: BGG
 * @Date: 2024-09-11 14:30:43
 * @LastEditors: BGG
 * @LastEditTime: 2024-09-12 15:55:00
 * @Description: 搜索栏
 */

import React from 'react'
import style from '../css/SearchBar.module.less'

const SearchBar: React.FC = () => {
  return (
    <div className={style.search}>
      <img className={style.search_icon} src="/images/icon_search.png" />
    </div>
  )
}

export default SearchBar
