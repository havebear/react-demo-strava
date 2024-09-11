export interface NavItemProps {
  title: string, // 标题
  path?: string, // 路径
  children?: Array<{  // 子菜单
    title: string,  // 标题
    path?: string // 路径
  }>
}
