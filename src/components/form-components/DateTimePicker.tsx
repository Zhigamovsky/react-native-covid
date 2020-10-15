import React, { useState } from 'react'
import styled from 'styled-components/native'
import DateTimePickerModal, { DateTimePickerProps as NativeDateTimePickerProps } from "react-native-modal-datetime-picker"
import { TouchableOpacity, Text } from 'react-native'

import { DateTimePickerProps } from './types'
import { styles as TextInputStyles } from './Input'
import { FLEX, isDeviceSize, } from '../../utils'
import { Divider } from './Divider'
import { _calculateAge, _calculateMonths } from '../../utils/calculates'
import { Label } from '../styled-components';

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  onChange,
  label = null,
  mode = 'date',
  type = 'age',
  enableDisplayDescription = false,
  placeholder = '',
  editable = true
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDatePicker();
  };

  const showAlertPicker = async () => {
    editable && setDatePickerVisibility(true);    
  }

  const calculateAge = () => {
    if(!value) return ``
    return `${_calculateAge(value, new Date())} y.o.`
  }

  const calculateExpiredLicenseTime = () => {
    if(!value) return `months left - `
    return `left ${_calculateMonths(new Date(), value)} months`
  }

  const calculateArrivalDate = () => {
    if(!value) return `- months ago`
    return `${_calculateMonths(new Date(), value)} months ago`
  }

  const parseDate = (date: Date | null | undefined): string => {
    if(!date) return ``;
    let _date = {
      day: String(date.getDate()).padStart(2, '0') ,
      month: String(date.getMonth()).padStart(2, '0'),
      year: date.getFullYear()
    }
    return `${_date.day}/${_date.month}/${_date.year}`
  }

  const renderResult = () => {
    switch (type) {
      case 'age':
        return calculateAge()
      
      case 'license':
        return calculateExpiredLicenseTime()

      case 'arrival':
        return calculateArrivalDate()
    }
  }

  const renderPickerProps: () => {
    maximumDate?: Date,
    minimumDate?: Date
  } = () => {
    switch (type) {
      case 'age':
        return {
          maximumDate: new Date()
        }
      
      case 'license':
        return {
          minimumDate: new Date()
        }

      case 'arrival':
        return {
          maximumDate: new Date()
        }
    
      default: 
        return {
          
        }
    }
  }

  return (
    <Container>
      { label && <Label>{label}</Label> }
      <Wrapper>
        <ValueContainer 
          activeOpacity={editable ? 0.6 : 1}
          onPress={showAlertPicker}
          style={[
            TextInputStyles.container, 
            { 
              paddingRight: 10,
              ...enableDisplayDescription ? {
                width: '60%'
              } : {}
            },
          ]}
        >
          <ValueText 
            style={[
              TextInputStyles.text,
              {
                marginRight: 10
              },
              { ...value ? {} : { color: '#999999' } }
            ]}
          >
            { parseDate(value) || placeholder }
          </ValueText>
          <RightIcon source={require('../../assets/icons/general__calendar.png')} />
        </ValueContainer>
        {
          enableDisplayDescription && (
            <AgeContainer>
              <AgeValue style={TextInputStyles.text}>
                { renderResult() }
              </AgeValue>
            </AgeContainer>
          )
        }
      </Wrapper>
      {
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={mode}
          display='spinner'
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          { ...renderPickerProps() }
          headerTextIOS='Выберите дату'
          confirmTextIOS='Ок'
          cancelTextIOS='Отмена'
          is24Hour={true}
        />
      }
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  ${FLEX('column', 'flex-start', 'flex-start')}
`

const Wrapper = styled.View`
  width: 100%;
  ${FLEX('row', 'center', 'space-between')}
`

const ValueContainer = styled.TouchableOpacity`
background: red;
  ${FLEX('row', 'center', 'space-between')}
`

const RightIcon = styled.Image`
  margin-top: -5px;
  resize-mode: contain;
  padding: -5px 10px 0 10px;
  ${isDeviceSize.select({
    s: `
      height: 20px;
      width: 20px;
    `,
    m: `
      height: 24px;
      width: 24px;
    `,
    _default: `
      height: 28px;
      width: 28px;
    `
  })}
`

const ValueText = styled.Text`

`

const AgeContainer = styled.View`
  width: 40%;
  height: 100%;
  ${FLEX()}
`

const AgeValue = styled.Text`
  padding: 0 10px 0;
  text-align: center;
`