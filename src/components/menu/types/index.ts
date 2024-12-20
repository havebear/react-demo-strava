export interface IMenu {
  title: string // 标题
  path: string // 路径
  paths?: string[] // 其他匹配的路径集合
}

export interface IMenusProps {
  list: IMenu[]
}
