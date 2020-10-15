import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { AuthorizationScreenProps, SwitcherScreenProps } from '../../types/navigation'
import { Button, Divider, Segments } from '../../components/form-components'
import { AccountTypes } from './static/data'
import { EAccountTypes } from '../../config/enums/enum.account.types'
import { images } from '../../utils/images'
import { FLEX, FONT } from '../../utils'

const Screen: React.FC<SwitcherScreenProps> = ({
  navigation
}) => {
  const [activeAccountType, changeAccountType] = useState<typeof AccountTypes.values[number]>(AccountTypes.values[0])
  const NavEvents = {
    toAthorization: () => {
      navigation.navigate(Tree.AuthorizationBranch.AuthorizationFetus.path, {
        accountType: activeAccountType
      } as AuthorizationScreenProps['route']['params'])
    },
    toRegistration: () => {
      switch (activeAccountType.value) {
        case EAccountTypes.Doctor:
          navigation.navigate(Tree.AuthorizationBranch.D__RegistrationFetus.path)
          break;
      
        case EAccountTypes.Patient:
          navigation.navigate(Tree.AuthorizationBranch.P__RegistrationFetus.path)
          break;
      }
    }
  }

  return (
    <Container
      headerProps={{
        title: Tree.AuthorizationBranch.SwitcherFetus.title,
        navigation
      }}
      scrollable='avoiding'
      avoidingProps={{
        scrollviewProps: {
          style: { width: '90%' }
        }
      }}
    >
      <LogoWrapper>
        <Logo source={images.logo} />
      </LogoWrapper>
      <Title>COVID-19</Title>
      <Divider />
      <Segments 
        label='Who are you?'
        values={AccountTypes.types}
        activeIndex={activeAccountType.index}
        onChangeIndex={index => changeAccountType(AccountTypes.values[index])}
      />
      <Divider />
      <Button 
        mode='solid-dark'
        title={`Authorize as a ${activeAccountType.value}`}
        onPress={NavEvents.toAthorization}
      />
      <Divider />
      <Button 
        mode='outline-dark'
        title={`Register as a ${activeAccountType.value}`}
        onPress={NavEvents.toRegistration}
      />
      <Divider />
    </Container>
  )
}

export default Screen

const Logo = styled.Image`
  width: 200px;
  aspect-ratio: 1;
  resize-mode: contain;
`

const LogoWrapper = styled.View`
  width: 100%;
  padding: 20px;
  ${FLEX()}
`

const Title = styled.Text`
  ${FONT('Bold', 30)}
  width: 100%;
  text-align: center;
`