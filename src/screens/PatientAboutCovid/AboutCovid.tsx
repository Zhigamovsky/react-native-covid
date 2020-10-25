import React from 'react'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { $DSDoctorsList } from '../../config/datasets/datasets.debug-patients-list'
import { PatientAboutCovidScreenProps } from '../../types/navigation'

const Screen: React.FC<PatientAboutCovidScreenProps> = ({
  navigation
}) => {
  return (
    <Container
      headerProps={{
        title: Tree.P__DrawerBranch.AboutCOVIDFetus.title,
        enableMenuButton: true,
        navigation
      }}
    >
      
    </Container>
  )
}

export default Screen