import { ButtonProps } from 'react-native-elements'
import { COLORS } from "../../utils"

export type ButtonTypeVariants = 
    'solid-blue' 
  | 'solid-dark' 
  | 'clear' 
  | 'outline-blue'
  | 'outline-dark'

export interface ButtonType {
  slug: ButtonTypeVariants,
  type: ButtonProps['type']
  borderColor: string,
  backgroundColor: string,
  fontColor: string
}

export type ButtonTypes = {
  [type in ButtonTypeVariants]: ButtonType
}

export const ButtonTypes: ButtonTypes = {
  'solid-blue': {
    slug: 'solid-blue',
    borderColor: COLORS.segments,
    backgroundColor: COLORS.segments,
    fontColor: '#FFFFFF',
    type: 'solid'
  },
  'solid-dark': {
    slug: 'solid-dark',
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.secondary,
    fontColor: '#FFFFFF',
    type: 'solid'
  },
  'clear': {
    slug: 'clear',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    fontColor: COLORS.segments,
    type: 'clear'
  },
  'outline-blue': {
    slug: 'outline-blue',
    borderColor: COLORS.segments,
    backgroundColor: 'transparent',
    fontColor: COLORS.segments,
    type: 'outline'
  },
  'outline-dark': {
    slug: 'outline-dark',
    borderColor: COLORS.secondary,
    backgroundColor: 'transparent',
    fontColor: COLORS.secondary,
    type: 'outline'
  }
}

export const ButtonDefaultValue = {
  radius: 10,
  height: 46,
  borderWidth: 2
}