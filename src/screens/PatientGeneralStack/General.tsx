import React from 'react'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { $DSDoctorsList } from '../../config/datasets/datasets.debug-patients-list'
import { PatientGeneralScreenProps } from '../../types/navigation'
import { DoctorItem } from './components'

const Screen: React.FC<PatientGeneralScreenProps> = ({
  navigation
}) => {
  return (
    <Container
      headerProps={{
        title: Tree.P__GeneralBranch.GeneralFetus.title,
        enableMenuButton: true,
        navigation
      }}
    >
      <DoctorItem 
        doctorData={$DSDoctorsList[0]}
      />
    </Container>
  )
}

export default Screen