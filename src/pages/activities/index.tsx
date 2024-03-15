/*
 * @Author: BGG
 * @Date: 2024-02-28 16:31:14
 * @LastEditors: BGG
 * @LastEditTime: 2024-03-15 17:34:33
 * @Description: 活动
 */

import React from 'react'
import Hello from '../../components/Hello'

const Activities: React.FC = () => {
  return (
    <div className='text-shadow sticky top-0 z-10 mb-4 text-lg font-bold text-gray-700 dark:text-white dark:text-opacity-70'>Active<Hello /></div>
  )
};

export default Activities

