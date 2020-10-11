import React from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AvoidingKeyboardProps } from './types'

const AvoidingKeyboard: React.FC<AvoidingKeyboardProps> = ({ 
  scrollviewProps = {},
  avoidingProps = {},
  children 
}) => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{
        width: '100%'
      }}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      { ...avoidingProps}
      { ...scrollviewProps}
    >
      {children}
    </KeyboardAwareScrollView>
  )
}

export default AvoidingKeyboard
