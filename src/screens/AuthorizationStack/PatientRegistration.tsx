import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { NavTree } from '../../config/navigation-tree'
import { PatientRegistrationScreenProps } from '../../types/navigation'
import { RegPatientForm } from './forms/RegPatient'
import { usePatientRegStore } from './storeHooks/usePatientRegStore'

const Screen: React.FC<PatientRegistrationScreenProps> = ({
  navigation
}) => {
  const [registerStore, registerActions, registerProps] = usePatientRegStore([])

  const NavEvents = {
    toPatientDrawer: () => {
      navigation.navigate(NavTree.AuthorizationBranch.P__Drawer.path)
    }
  }

  const RequestEvents = {
    forceRegister: () => {
      NavEvents.toPatientDrawer()
    }
  }
  
  return (
    <Container
      headerProps={{
        title: Tree.AuthorizationBranch.P__RegistrationFetus.title,
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
      <RegPatientForm 
        values={registerStore}
        actions={registerActions}
        props={registerProps}
        onValidPress={RequestEvents.forceRegister}
      />
      {/* <Button title='Register as Patient' onPress={NavEvents.toPatientDrawer} /> */}
    </Container>
  )
}

export default Screen