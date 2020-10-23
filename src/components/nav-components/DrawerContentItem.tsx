import React, { useState } from 'react'
import styled from 'styled-components/native'

import { COLORS, FLEX, FONT, isDeviceSize } from '../../utils'
import { DrawerContentItemProps } from './types'

export const DrawerContentItem: React.FC<DrawerContentItemProps> = ({
  title,
  Icon,
  onPress,
  isDisable = false
}) => {
  const [isPressed, togglePressed] = useState<boolean>(false);
  
  const Events = {
    onPressItem: () => {
      if(isDisable) return;
      onPress();
      togglePressed(true);
      setTimeout(() => {
        togglePressed(false);
      }, 500)
    },
    onPressIn: () => {
      if(isDisable) return;
      togglePressed(true);
    },
    onPressOut: () => {
      if(isDisable) return;
      togglePressed(false);
    }
  }

  return (
    <TouchDrawerItem
      onPress={Events.onPressItem}
      onPressIn={Events.onPressIn}
      onPressOut={Events.onPressOut}
      isPressed={isPressed}
      isDisable={isDisable}
    >
      <DrawerIconContainer>
        {Icon}
      </DrawerIconContainer>
      <DrawerTitleContainer>
        <DrawerTitle
          lineBreakMode='tail'
          numberOfLines={1}
        >
          {title}
        </DrawerTitle>
      </DrawerTitleContainer>
    </TouchDrawerItem>
  )
}

const TouchDrawerItem = styled.TouchableOpacity<{
  isDisable: boolean,
  isPressed: boolean
}>`
  ${FLEX('row', 'center', 'flex-start')}
  background: ${COLORS.background};
  height: 50px;
  margin-bottom: 5px;
`

export const DrawerIconContainer = styled.View`
  width: 25%;
  height: 100%;
  ${FLEX()}
`

export const DrawerTitleContainer = styled.View`
  width: 50%;
  height: 100%;
  ${FLEX('row', 'center', 'flex-start')}
`

const DrawerTitle = styled.Text`
  padding-top: 5px;
  ${FONT('Bold', 14)}
`