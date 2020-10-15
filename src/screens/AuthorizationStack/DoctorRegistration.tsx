import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { NavTree } from '../../config/navigation-tree'
import { DoctorRegistrationScreenProps } from '../../types/navigation'
import { RegDoctorForm } from './forms/RegDoctor'
import { useDoctorRegStore } from './storeHooks/useDoctorRegStore'

const Screen: React.FC<DoctorRegistrationScreenProps> = ({
  navigation
}) => {
  const [registerStore, registerActions, registerProps] = useDoctorRegStore({})

  const NavEvents = {
    toDoctorDrawer: () => {
      navigation.navigate(NavTree.AuthorizationBranch.D__Drawer.path)
    }
  }

  const RequestEvents = {
    forceRegister: () => {
      NavEvents.toDoctorDrawer()
    }
  }

  return (
    <Container
      headerProps={{
        title: Tree.AuthorizationBranch.D__RegistrationFetus.title,
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
      <RegDoctorForm
        values={registerStore}
        actions={registerActions}
        props={registerProps}
        onValidPress={RequestEvents.forceRegister}
      />
    </Container>
  )
}

export default Screen