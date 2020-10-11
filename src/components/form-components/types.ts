import { ButtonProps as NativeButtonProps } from "react-native";
import { ButtonTypeVariants } from "./_static";

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

export interface ButtonProps {
  title: string
  mode?: ButtonTypeVariants
  onPress: () => void
  nativeProps?: NativeButtonProps
}