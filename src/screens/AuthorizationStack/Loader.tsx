import React, { useEffect } from 'react'
import { ActivityIndicator, Button } from 'react-native'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { LoaderScreenProps } from '../../types/navigation'
import { COLORS } from '../../utils'

const Screen: React.FC<LoaderScreenProps> = ({
  navigation
}) => {

  const NavEvents = {
    toSwitcher: () => {
      navigation.navigate(Tree.AuthorizationBranch.SwitcherFetus.path)
    }
  }

  useEffect(() => {
    let focusListener = navigation.addListener('focus', () => {
      NavEvents.toSwitcher()
    })
    return focusListener
  }, [])

  return (
    <Container>
      {/* <Button 
        title='To Switcher'
        onPress={NavEvents.toSwitcher}
      /> */}
      <ActivityIndicator 
        size='large'
        style={{
          marginTop: 50
        }}
        color={COLORS.main}
      />
    </Container>
  )
}

export default Screen