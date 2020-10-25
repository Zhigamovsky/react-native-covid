import { 
  ButtonProps as NativeButtonProps, 
  TextInputProps as NativeTextInputProps, 
  TextStyle, 
  ViewStyle
} from "react-native"
import { ButtonTypeVariants } from "./_static"

interface WithValueHandler<T> {
  value: T,
  onValueChange: (v: T) => void
}

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

export interface TextInputProps 
  extends WithValueHandler<string> {
  placeholder?: string
  label?: string
  nativeProps?: Omit<NativeTextInputProps, 'value' | 'onChangeText' | 'placeholder'>
}

export interface ListPickerValue {
  slug: string
  title: string,
  onPress?: () => void,
  containerStyle?: ViewStyle
  titleStyle?: TextStyle
}

export interface ListPickerProps {
  label?: string
  placeholder?: string
  value: ListPickerValue | null
  onPickValue: (value: ListPickerValue) => void
  listValue: ListPickerValue[]
}

export interface CheckboxProps 
  extends WithValueHandler<boolean> {
  label?: string,
  
}

export interface DateTimePickerProps {
  enableDisplayDescription?: boolean,
  label?: string,
  placeholder?: string,
  value: Date | undefined | null,
  onChange: (date: Date) => void,
  mode?: 'time' | 'date' | 'datetime',
  type?: 'age' | 'license' | 'arrival',
  editable?: boolean
} 

export interface AccordionProps {

}

export interface AccordionRenderProps {
  content: {
    title: string,
    content: string
  },
  index: number,
  isActive: boolean,
  sections: AccordionRenderProps['content'][]
} 