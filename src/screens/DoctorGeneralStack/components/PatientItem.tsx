import React, { useEffect } from 'react'
import styled from 'styled-components/native'

import { PatientItemProps } from './types'

import { DSGroupKeys } from '../../../config/datasets/datasets.group-keys'
import { COLORS, FLEX, FONT } from '../../../utils'

export const PatientItem: React.FC<PatientItemProps> = ({
  patientData
}) => {

  return (
    <Container>
      <HeaderContainer>
        <Message 
          lineBreakMode='tail'
          numberOfLines={1}
          textSize='m'
        >
          Patient: #{patientData._id}
        </Message>
      </HeaderContainer>
      <ContentContainer>
        <Row>
          <Message textSize='s'>Name:</Message>
          <Message textSize='s'>{patientData.fullname}</Message>
        </Row>
        <Row>
          <Message textSize='s'>Age:</Message>
          <Message textSize='s'>{patientData._birthdate} y.o.</Message>
        </Row>
        <Row>
          <Message textSize='s'>Group key:</Message>
          <Message textSize='s'>{patientData.groupKey}</Message>
        </Row>
      </ContentContainer>
      <BottomContainer>
        <GroupContainer groupKey={patientData.groupKey}>
          <GroupMessage 
            lineBreakMode='tail'
            numberOfLines={1}
            groupKey={patientData.groupKey}
          >
            { DSGroupKeys[patientData.groupKey].title }
          </GroupMessage>
        </GroupContainer>
      </BottomContainer>
    </Container>
  )
}

const Container = styled.View`
  width: 95%;
  min-width: 95%;
  background: white;
  margin: 5px;
  box-shadow: 1px 0px 5px #0000003D;
  elevation: 5;
  border-radius: 15px;
  ${FLEX('column', 'center', 'space-between')}
`

const ExtShadowContainer = styled.View`
  box-shadow: 1px 0px 5px #0000003D;
  elevation: 5;
  min-height: 40px;
  max-height: 40px;
  min-width: 100%;
`

const HeaderContainer = styled(ExtShadowContainer)`
  background: #EEEFFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  ${FLEX()}
`

const BottomContainer = styled(ExtShadowContainer)`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`

const GroupContainer = styled.View<{
  groupKey: PatientItemProps['patientData']['groupKey']
}>`
  min-width: 100%;
  height: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  ${({ groupKey }) => `background: ${DSGroupKeys[groupKey].style.backgroundColor};`}
  ${FLEX()}
`

const GroupMessage = styled.Text<{
  groupKey: PatientItemProps['patientData']['groupKey']
}>`
  text-transform: uppercase;
  ${({ groupKey }) => FONT('Bold', 14, DSGroupKeys[groupKey].style.fontColor)}
`

export  const Message = styled.Text<{
  textSize: 'm' | 'l' | 's'
}>`
  ${({ textSize }) => {
    switch (textSize) {
      case 's':
        return `
          width: 50%;
          padding: 5px;
          ${FONT('Medium', 12)}
        `
      case 'm':
        return FONT('Medium', 15)
      case 'l': 
        return FONT('Medium', 17)
      default: return ``
    }
  }}
`

export const ContentContainer = styled.View`
  background: white;
  padding-bottom: 10px;
  width: 100%;
`

export const Row = styled.View`
  ${FLEX('row', 'center', 'space-between')}
  width: 100%;
`