/*
 * @Author: BGG
 * @Date: 2024-04-29 14:15:30
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-20 14:36:00
 * @Description: 概览
 */

import React from 'react'
import Map from './Map'
import Altitude from './Altitude'
import Stages from './Stages'

const Overview: React.FC = () => {
  return (
    <div>
      <Map />
      <Altitude />
      <Stages />
    </div>
  )
}

export default Overview

