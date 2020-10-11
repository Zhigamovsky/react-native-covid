import React, { useState } from 'react'

import { AvoidingKeyboard, Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { SwitcherScreenProps } from '../../types/navigation'
import { Button, Divider, Segments } from '../../components/form-components'
import { AccountTypes } from './static/data'
import { EAccountTypes } from '../../config/enums/enum.account.types'
import { images } from '../../utils/images'
import styled from 'styled-components/native'
import { FLEX } from '../../utils'

const Screen: React.FC<SwitcherScreenProps> = ({
  navigation
}) => {
  const [activeAccountType, changeAccountType] = useState<typeof AccountTypes.values[number]>(AccountTypes.values[0])
  const NavEvents = {
    toAthorization: () => {
      navigation.navigate(Tree.AuthorizationBranch.AuthorizationFetus.path)
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
    >
      <AvoidingKeyboard 
        scrollviewProps={{
          style: { width: '90%' }
        }}
      >
        <LogoWrapper>
          <Logo source={images.logo} />
        </LogoWrapper>
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
      </AvoidingKeyboard>
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