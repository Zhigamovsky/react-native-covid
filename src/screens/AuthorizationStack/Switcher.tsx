import React, { useState } from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import { AvoidingKeyboard, Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { SwitcherScreenProps } from '../../types/navigation'
import { Divider, Segments } from '../../components/form-components'
import { AccountTypes } from './static/data'

const Screen: React.FC<SwitcherScreenProps> = ({
  navigation
}) => {
  const [activeAccountType, changeAccountType] = useState<typeof AccountTypes.values[number]>(AccountTypes.values[0])
  
  const NavEvents = {
    toAthorization: () => {
      navigation.navigate(Tree.AuthorizationBranch.AuthorizationFetus.path)
    },
    toDoctorRegistration: () => {
      navigation.navigate(Tree.AuthorizationBranch.D__RegistrationFetus.path)
    },
    toPatientRegistration: () => {
      navigation.navigate(Tree.AuthorizationBranch.P__RegistrationFetus.path)
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
        <Divider />
        <Segments 
          label='Who are you?'
          values={AccountTypes.types}
          activeIndex={activeAccountType.index}
          onChangeIndex={index => changeAccountType(AccountTypes.values[index])}
        />
        <Button 
          title='To Athorization'
          onPress={NavEvents.toAthorization}
        />
        <Button 
          title='To Doctor Registration'
          onPress={NavEvents.toDoctorRegistration}
        />
        <Button 
          title='To Patient Registration'
          onPress={NavEvents.toPatientRegistration}
        />
        <Divider />
      </AvoidingKeyboard>
    </Container>
  )
}

export default Screen