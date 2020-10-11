import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { NavTree } from '../../config/navigation-tree'
import { PatientRegistrationScreenProps } from '../../types/navigation'

const Screen: React.FC<PatientRegistrationScreenProps> = ({
  navigation
}) => {
  const NavEvents = {
    toPatientDrawer: () => {
      navigation.navigate(NavTree.AuthorizationBranch.P__Drawer.path)
    }
  }
  
  return (
    <Container
      headerProps={{
        title: Tree.AuthorizationBranch.P__RegistrationFetus.title,
        navigation
      }}
    >
      <Button title='Register as Patient' onPress={NavEvents.toPatientDrawer} />
    </Container>
  )
}

export default Screen