import React from 'react'
import styled from 'styled-components/native'

import { Button, Divider, Input, ListPicker } from '../../../components/form-components'
import { Label } from '../../../components/styled-components'
import { specializationListValue } from '../static/data'

import { RegDoctorFormProps } from './types'

const GroupLabelStyles: string = 'font-size: 15px; text-align: center; color: grey;'

export const RegDoctorForm: React.FC<RegDoctorFormProps> = ({
  values,
  onValidPress,
  actions,
  props
}) => {

  const validation = async () => new Promise((resolve, reject) => {
    resolve()
  })
  
  const _onValidPress = async () => {
    try {
      await validation()
      onValidPress()
    }
    catch(e) {
      
    }
  }

  return (
    <>
      <Divider />
      <Label inlineStyle={GroupLabelStyles}>General information</Label>
      <Input 
        label='Fullname'
        value={values.fullname}
        placeholder='Example: Nikita Anderson'
        onValueChange={actions.changeFullname}
      />
      <Input 
        label='Place of work'
        value={values.placeOfWork}
        placeholder='Write here...'
        onValueChange={actions.changePlaceOfWork}
      />
      <ListPicker 
        label='Specialization'
        placeholder='Pick from list'
        value={values.specialization}
        listValue={specializationListValue}
        onPickValue={actions.changeSpecialization}
      />
      <Input 
        label='Diploma number'
        value={values.diplomaNumber}
        placeholder='Write here...'
        onValueChange={actions.changeDiplomaNumber}
      />
      <Input 
        label='Certificate number'
        value={values.certificateNumber}
        placeholder='Write here...'
        onValueChange={actions.changeCertificateNumber}
      />
      <Label inlineStyle={GroupLabelStyles}>Authorization information</Label>
      <Input 
        label='Login'
        value={values.login}
        placeholder='Example: DoctorAnderson1970'
        onValueChange={actions.changeLogin}
      />
      <Input 
        label='Password'
        value={values.password}
        placeholder='Enter your password...'
        onValueChange={actions.changePassword}
        nativeProps={{
          secureTextEntry: true
        }}
      />
      <Input
        label='Repeat password'
        value={values.repeatPassword}
        placeholder='Enter your password...'
        onValueChange={actions.changeRepeatPassword}
        nativeProps={{
          secureTextEntry: true
        }}
      />
      <Divider />
      <Button 
        mode='solid-blue'
        title='Register'
        onPress={_onValidPress}
      />
      <Divider />
    </>
  )
}