import React from 'react'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { PatientGeneralScreenProps } from '../../types/navigation'

const Screen: React.FC<PatientGeneralScreenProps> = ({
  navigation
}) => {
  return (
    <Container
      headerProps={{
        title: `P ${Tree.P__GeneralBranch.GeneralFetus.title}`,
        enableMenuButton: true,
        navigation
      }}
    >
      
    </Container>
  )
}

export default Screen