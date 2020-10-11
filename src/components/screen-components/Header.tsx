import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, StatusBarProps } from 'react-native'
import { Header as NativeHeader } from 'react-native-elements'
import { DrawerNavigationProp } from '@react-navigation/drawer'

import { FONT } from '../../utils'
import { HeaderPageProps } from './types'
import { BackButton, MenuButton } from '../../components/buttons-components'
import { COLORS } from '../../utils/css'

const statusBarProp: StatusBarProps = {
  barStyle: 'light-content',
  backgroundColor: COLORS.statusbar,
  animated: true
}

const Header: React.FC<HeaderPageProps> = ({
  title, 
  navigation,
  enableBackButton = false,
  enableMenuButton = false,
  ContentCenter = null,
  containerStyle = {}
}) => {
  
  const renderLeftContent = () => {
    if(enableBackButton) {
      return (
        <BackButton onPress={navigation.goBack} />
      )
    }
    else if(enableMenuButton) {
      return (
        <MenuButton onPress={(navigation as unknown as DrawerNavigationProp<any>).openDrawer} />
      )
    }
  }
  
  const renderCenterContent = () => {
    if(ContentCenter) {
      return ContentCenter
    }
    else {
      return <Title>{title}</Title>
    }
  }

  return (
    <NativeHeader
      statusBarProps={statusBarProp}
      containerStyle={[headerStyle, containerStyle]}
      style={{
        backgroundColor: '#353535'
      }}
      centerComponent={renderCenterContent()}
      placement={ContentCenter ? 'left' : 'center'}
      leftComponent={renderLeftContent()}
    />
  )
}

const { headerStyle } = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.secondary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: -5
  }
})

const Title = styled.Text`
  margin-top: 5px;
  ${FONT('Bold', 20, COLORS.mainFont)}
`

export default Header;