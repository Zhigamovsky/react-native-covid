import React from 'react'
import { ActivityIndicator } from 'react-native'

import { InfiniteLoaderProps } from './types'

import { COLORS } from '../../utils'

export const InfiniteLoader: React.FC<InfiniteLoaderProps> = ({
  
}) => (
  <ActivityIndicator 
    size='large'
    style={{padding: 10}}
    color={COLORS.elements}
  />
)