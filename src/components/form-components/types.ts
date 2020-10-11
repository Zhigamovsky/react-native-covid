export interface SegmentsProps {
  values: any[]
  activeIndex: number
  onChangeIndex: (index: number) => void
  backgroundColor?: string
  label?: string
}

export interface DividerProps {
  height?: number | string
  width?: number | string
  background?: string
}