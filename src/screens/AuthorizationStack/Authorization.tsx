import React, { useState } from 'react'
import {  } from 'react-native'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { EAccountTypes } from '../../config/enums/enum.account.types'
import { NavTree } from '../../config/navigation-tree'
import { AuthorizationScreenProps } from '../../types/navigation'
import { AccountTypes } from './static/data'
import { Button, Divider, Input } from '../../components/form-components'
import { useAuthStore } from './storeHooks/useAuthStore'
import { AuthForm } from './forms/Auth'

const Screen: React.FC<AuthorizationScreenProps> = ({
  navigation, route: { params: { accountType }}
}) => {
  const [authStore, authActions, authProps] = useAuthStore({accountType: accountType.value})

  const NavEvents = {
    signInAsDoctor: () => {
      navigation.navigate(NavTree.AuthorizationBranch.D__Drawer.path)
    },
    signInAsPatient: () => {
      navigation.navigate(NavTree.AuthorizationBranch.P__Drawer.path)
    },
    signIn: () => {
      switch (accountType.value) {
        case EAccountTypes.Doctor: NavEvents.signInAsDoctor()
          break
      
        case EAccountTypes.Patient: NavEvents.signInAsPatient()
          break
      }
    }
  }

  return (
    <Container
      headerProps={{
        title: Tree.AuthorizationBranch.AuthorizationFetus.title,
        enableBackButton: true,
        navigation
      }}
      scrollable='avoiding'
      avoidingProps={{
        scrollviewProps: {
          style: { width: '90%' }
        }
      }}
    >
      <AuthForm 
        values={authStore}
        actions={authActions}
        props={authProps}
        onValidPress={NavEvents.signIn}
      />
    </Container>
  )
}

export default Screen