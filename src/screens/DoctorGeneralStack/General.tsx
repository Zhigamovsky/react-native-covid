import React from 'react'
import styled from 'styled-components/native'

import { Container} from '../../components/screen-components'
import { Tree } from '../../config'
import { DoctorGeneralScreenProps } from '../../types/navigation'

const Screen: React.FC<DoctorGeneralScreenProps> = ({
  navigation
}) => {
  return (
    <Container
      headerProps={{
        title: Tree.D__GeneralBranch.GeneralFetus.title,
        enableMenuButton: true,
        navigation
      }}
    >
      
    </Container>
  )
}

export default Screen