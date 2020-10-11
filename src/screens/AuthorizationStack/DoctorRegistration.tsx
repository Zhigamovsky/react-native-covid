import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { NavTree } from '../../config/navigation-tree'
import { DoctorRegistrationScreenProps } from '../../types/navigation'

const Screen: React.FC<DoctorRegistrationScreenProps> = ({
  navigation
}) => {
  const NavEvents = {
    toDoctorDrawer: () => {
      navigation.navigate(NavTree.AuthorizationBranch.D__Drawer.path)
    }
  }

  return (
    <Container
      headerProps={{
        title: Tree.AuthorizationBranch.D__RegistrationFetus.title,
        navigation
      }}
    >
      <Button title='Register as Doctor' onPress={NavEvents.toDoctorDrawer} />
    </Container>
  )
}

export default Screen