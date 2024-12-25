/*
 * @Author: BGG
 * @Date: 2024-12-25 14:21:21
 * @LastEditors: BGG
 * @LastEditTime: 2024-12-25 14:21:21
 * @Description: dom 相关
 */

/**
 * 根据 css 变量名获取其值
 * @param name 变量名
 * @returns string
 */
export const getCssVariable = (name: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name)
}
