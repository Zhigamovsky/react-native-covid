import React from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { MenuButtonProps } from './types'

export const MenuButton: React.FC<MenuButtonProps> = ({
  onPress
}) => {
  return (
    <TouchContainer 
      activeOpacity={0.3} 
      onPress={onPress}
    >
      <Ionicons 
        name='menu-sharp'
        size={30} 
        color='white'  
      />
      {/* <Image source={require('../../assets/icons/header__menu.png')} /> */}
    </TouchContainer>
  )
}

const TouchContainer = styled.TouchableOpacity`
  padding: 10px;
`

const Image = styled.Image`
  height: 32px;
  width: 32px;
  resize-mode: contain;
`