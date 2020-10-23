import React from 'react'
import styled from 'styled-components/native'

import * as Form from '../form-components'
import { FLEX, FONT } from '../../utils'
import { DrawerUserInformationProps } from './types'

export const DrawerUserInformation: React.FC<DrawerUserInformationProps> = ({
  accountType
}) => {
  
  return (
    <Container>
      <ContentContainer>
        <Username 
          lineBreakMode='tail'
          numberOfLines={1}
        >Test Anderson User</Username>
        <Form.Divider />
        <UserStatus>
          {accountType}
        </UserStatus>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.View`
  background: #FFF;
  width: 100%;
  box-shadow: 0px 0px 7px #0000001D;
  elevation: 2;
  margin-bottom: 12px;
  ${FLEX('column')}
  height: 120px;
`;

const ContentContainer = styled.View`
  ${FLEX('column')}
  height: 80px;
  width: 100%;
`;

const Username = styled.Text`
  padding-top: 5px;
  width: 100%;
  text-align: center;
  ${FONT('Bold', 17)}
`;

const UserStatus = styled.Text`
  ${FONT('Regular', 13)} 
`;