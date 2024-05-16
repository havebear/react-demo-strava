export interface ICommonProps {
  reversal?: boolean, // 调换标题和数值的位置
  align?: 'left' | 'right' | 'center' // 文本对齐方式
  border?: boolean // 是否显示边框
}

export interface IColumn {
  title: string // 标题
  dataIndex: string // 数据索引
  unit?: string // 单位
}