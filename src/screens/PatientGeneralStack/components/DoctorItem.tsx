import React from 'react'
import styled from "styled-components/native"

import { COLORS, FLEX, FONT } from '../../../utils'
import { DoctorItemProps } from "./types"

export const DoctorItem: React.FC<DoctorItemProps> = ({
  doctorData
}) => {
  return (
    <>
      <Container>
        <Title>Your Doctor</Title>
        <ContentContainer>
          <Row>
            <Message textSize='s'>Name:</Message>
            <Message textSize='s'>{doctorData.fullname}</Message>
          </Row>
          <Row>
            <Message textSize='s'>Place of work:</Message>
            <Message textSize='s'>{doctorData.placeOfWork}</Message>
          </Row>
          <Row>
            <Message textSize='s'>Certifiacate:</Message>
            <Message textSize='s'>{doctorData.certificateNumber}</Message>
          </Row>
        </ContentContainer>
        <BottomContainer>
          <BottomTitle>Specialization: {doctorData.specialization}</BottomTitle>
        </BottomContainer>
      </Container>
      <UnderTitle>Tracking started with {new Date().toLocaleString()}</UnderTitle>
    </>
  )
}

const Container = styled.View`
  width: 100%;
  background: white;
  box-shadow: 1px 0px 5px #0000003D;
  elevation: 5;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  ${FLEX('column', 'center', 'space-between')}
`

const Title = styled.Text`
  ${FONT('Regular', 17)}
  padding: 15px 0;
`

const UnderTitle = styled(Title)`
  font-size: 14px;
`

const Message = styled.Text<{
  textSize: 'm' | 'l' | 's'
}>`
  width: 50%;
  padding: 5px;
  ${({ textSize }) => {
    switch (textSize) {
      case 's': return FONT('Medium', 13)
      case 'm': return FONT('Medium', 15)
      case 'l': return FONT('Medium', 17)
      default: return ``
    }
  }}
`
  
const ContentContainer = styled.View`
  padding-bottom: 20px;
  width: 100%;
`
  
const Row = styled.View`
  ${FLEX('row', 'center', 'space-between')}
  width: 100%;
  padding: 0 10px;
  border: 0px solid lightgrey;
  border-bottom-width: 1px;
`

const BottomContainer = styled.View`
  box-shadow: 1px 0px 5px #0000003D;
  elevation: 5;
  min-height: 40px;
  max-height: 40px;
  min-width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: ${COLORS.segments};
  ${FLEX()}
`

const BottomTitle = styled.Text`
  ${FONT('Bold', 16, 'white')}
  width: 100%;
  text-align: center;
`