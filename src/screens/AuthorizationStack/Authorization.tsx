import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { NavTree } from '../../config/navigation-tree'
import { AuthorizationScreenProps } from '../../types/navigation'

const Screen: React.FC<AuthorizationScreenProps> = ({
  navigation
}) => {

  const NavEvents = {
    signInAsDoctor: () => {
      navigation.navigate(NavTree.AuthorizationBranch.D__Drawer.path)
    },
    signInAsPatient: () => {
      navigation.navigate(NavTree.AuthorizationBranch.P__Drawer.path)
    }
  }

  return (
    <Container
      headerProps={{
        title: Tree.AuthorizationBranch.AuthorizationFetus.title,
        navigation
      }}
    >
      <Button title='Log in as Doctor' onPress={NavEvents.signInAsDoctor} />
      <Button title='Log in as Patient' onPress={NavEvents.signInAsPatient} />
    </Container>
  )
}

export default Screen