import React from 'react'
import { act } from 'react-test-renderer'
import styled from 'styled-components/native'
import { Button, Checkbox, DateTimePicker, Divider, Input, ListPicker, Segments } from '../../../components/form-components'
import { Label } from '../../../components/styled-components'
import { LivingConditionsTypes, SexTypes } from '../static/data'

import { RegPatientFormProps } from './types'

const GroupLabelStyles: string = 'font-size: 15px; text-align: center; color: grey;'

export const RegPatientForm: React.FC<RegPatientFormProps> = ({
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
        label='Fullname*'
        value={values.fullname}
        placeholder='Example: Nikita Anderson'
        onValueChange={actions.changeFullname}
      />
      <Segments 
        label='Sex'
        values={SexTypes.types}
        activeIndex={values.sex.index}
        onChangeIndex={v => actions.changeSexType({value: SexTypes.values[v].value, index: v})}
      />
      <Input 
        label='Phone number*'
        value={values.phone}
        placeholder='380661231223'
        onValueChange={actions.changePhone}
      />
      <DateTimePicker 
        label='Select your birthdate'
        mode='date'
        placeholder='XX/XX/XXXX'
        enableDisplayDescription
        type='age'
        value={values.birthdate}
        onChange={actions.changeBirthDate}
      />
      <Input 
        label='Address*'
        value={values.address}
        placeholder='Example: Kyiv, st Shevchenko 24, 2'
        onValueChange={actions.changeAddress}
      />
      <Input 
        label='Doctor ID*'
        value={values.doctorID}
        placeholder='Write here...'
        onValueChange={actions.changeDoctorID}
      />
      <Checkbox 
        label='You are working?'
        value={values.placeOfWork.value}
        onValueChange={actions.togglePlaceOfWork}
      /> 
      {
        values.placeOfWork.value ? (
          <Input 
            label='About place or work*'
            value={values.placeOfWork.subValue}
            placeholder='Write here...'
            onValueChange={actions.changePlaceOfWork}
          />
        ) : null
      }
      <Segments 
        label='Living conditions'
        values={LivingConditionsTypes.types}
        activeIndex={values.livingConditions.index}
        onChangeIndex={v => actions.changeLivingConditionsType({value: LivingConditionsTypes.values[v].value, index: v})}
      />
      <Checkbox 
        label='Have you been abroad in the last 3 months?'
        value={values.abroadInformation.value}
        onValueChange={actions.toggleAbroadInformation}
      />
      {
        values.abroadInformation.value ? (
          <>
            <Input 
              label='Abroad country*'
              value={values.abroadInformation.country}
              placeholder='Write here...'
              onValueChange={actions.changeAbroadCountry}
            />
            <DateTimePicker 
              label='Select your arrival date'
              mode='date'
              placeholder='XX/XX/XXXX'
              enableDisplayDescription
              type='arrival'
              value={values.abroadInformation.arrivalDate}
              onChange={actions.changeAbroadDate}
            />
          </>
        ) : null
      }
      <Checkbox 
        label='Whether you are ill for more than 4 days with an acute respiratory disease'
        value={values.respiratoryDisease}
        onValueChange={actions.toggleRespiratoryDisease}
      />
      <Checkbox 
        label='Have you had close contact with a COVID-19 patient?'
        value={values.contactWithCovid}
        onValueChange={actions.toggleContactWithCovid}
      />
      <Checkbox 
        label='Have you had close contact with a probable case of COVID-19'
        value={values.probableContactWithCovid}
        onValueChange={actions.toggleProbableContactWithCovid}
      />
      <Checkbox 
        label='Whether family members have symptoms of the disease'
        value={values.haveFamilySymptoms}
        onValueChange={actions.toggleHavingFamilySymptoms}
      />
      <Checkbox 
        label='Whether you belong to the occupational risk group'
        value={values.haveRiskGroup}
        onValueChange={actions.toggleHavingRiscGroup}
      />
      <Checkbox 
        label='Do you have COVID-19?'
        value={values.haveCovid.value}
        onValueChange={actions.toggleHavingCovid}
      />
      {
        values.haveCovid.value ? (
          <Input 
            label='How many days ago did the symptoms appear?*'
            value={values.haveCovid.days}
            placeholder='from 1 to 30...'
            onValueChange={actions.changeHavingCovidDays}
          />
        ) : null
      }
      <Label inlineStyle={GroupLabelStyles}>Concomitant pathology and physiological features</Label>
      <Checkbox 
        label='Severe chronic diseases of the lungs and cardiovascular system?'
        value={values.illnessLungs}
        onValueChange={actions.toggleIllnessLungs}
      />
      <Checkbox 
        label='Renal failure?'
        value={values.illnessRenal}
        onValueChange={actions.toggleIllnessRenal}
      />
      <Checkbox 
        label='Immunosuppressive states (Immune system damage)?'
        value={values.illnessImmune}
        onValueChange={actions.toggleIllnessImmune}
      />
      <Checkbox 
        label='Severe allergic diseases or conditions?'
        value={values.illnessAllergic}
        onValueChange={actions.toggleIllnessAllergic}
      />
      <Checkbox 
        label='Autoimmune diseases (connective tissue diseases)?'
        value={values.illnessAutoimmune}
        onValueChange={actions.toggleIllnessAutoimmune}
      />
      <Checkbox 
        label='Diabetes?'
        value={values.illnessDiabetes}
        onValueChange={actions.toggleIllnessDiabetes}
      />
      <Checkbox 
        label='Pregnancy?'
        value={values.illnessPregnancy}
        onValueChange={actions.toggleIllnessPregnancy}
      />
      <Label inlineStyle={GroupLabelStyles}>Authorization information</Label>
      <Input 
        label='Login*'
        value={values.login}
        placeholder='Example: DoctorAnderson1970'
        onValueChange={actions.changeLogin}
      />
      <Input 
        label='Password*'
        value={values.password}
        placeholder='Enter your password...'
        onValueChange={actions.changePassword}
        nativeProps={{
          secureTextEntry: true
        }}
      />
      <Input 
        label='Repeat password*'
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