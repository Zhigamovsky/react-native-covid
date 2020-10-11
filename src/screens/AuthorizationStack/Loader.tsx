import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { LoaderScreenProps } from '../../types/navigation'

const Screen: React.FC<LoaderScreenProps> = ({
  navigation
}) => {

  const NavEvents = {
    toSwitcher: () => {
      navigation.navigate(Tree.AuthorizationBranch.SwitcherFetus.path)
    }
  }

  return (
    <Container
      // headerProps={{
      //   title: Tree.AuthorizationBranch.LoaderFetus.title,
      //   navigation
      // }}
    >
      <Button 
        title='To Switcher'
        onPress={NavEvents.toSwitcher}
      />
    </Container>
  )
}

export default Screen