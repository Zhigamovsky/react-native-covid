import React from 'react'
import { RefreshControl } from 'react-native'
import { COLORS } from '../../utils'

import { RefreshLoaderProps } from './types'

export const RefreshLoader: React.FC<RefreshLoaderProps> = ({
  tintColor = COLORS.elements,
  colors = [COLORS.main, COLORS.elements],
  ...props
}) => (
  <RefreshControl 
    {...{ tintColor, colors }}
    {...props}
  />
)