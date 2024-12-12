/*
 * @Author: BGG
 * @Date: 2024-04-29 14:15:30
 * @LastEditors: BGG
 * @LastEditTime: 2024-04-29 14:15:40
 * @Description: 挑战
 */

import React from 'react'
import Hello from '../../components/Hello'

const Challenges: React.FC = () => {
  return (
    <div className='text-shadow sticky top-0 z-10 mb-4 text-lg font-bold text-gray-700 dark:text-white dark:text-opacity-70'>Active<Hello /></div>
  )
};

export default Challenges

