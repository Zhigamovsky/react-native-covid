import React from 'react'
import styled from 'styled-components/native'

import { FadeInView } from '../../../components/animation-components'
import { Button, Checkbox, Divider, Input, ListPicker, Segments } from '../../../components/form-components'
import { Label } from '../../../components/styled-components'
import { FLEX, FONT } from '../../../utils'
import { CoughtTypes, dyspneaListValue, HealthStatusTypes, increaseTempListValue } from '../static/data'
import { RegDoctorFormProps } from './types'

const GroupLabelStyles: string = 'font-size: 15px; text-align: center; color: grey;'

export const QuestionnaireForm: React.FC<RegDoctorFormProps> = ({
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
      <Label inlineStyle={GroupLabelStyles}>Fill the Daily questionnaire</Label>
      <Segments 
        label='Health status'
        values={HealthStatusTypes.types}
        activeIndex={values.healthStatus.index}
        onChangeIndex={v => actions.changeHealthStatus({value: HealthStatusTypes.values[v].value, index: v})}
      />
      <Divider height={10} />
      <Checkbox 
        label='Increase in body temperature?'
        value={values.increaseTemp.value}
        onValueChange={actions.toggleIncreaseTemp}
      /> 
      {
        values.increaseTemp.value ? (
          <FadeInView>
            <ListPicker 
              label='Describe situation'
              placeholder='Pick from list'
              value={values.increaseTemp.subValue}
              listValue={increaseTempListValue}
              onPickValue={actions.changeIncreasetempSubValue}
            />
            <Divider height={10} />
          </FadeInView>
        ) : null
      }
      <Checkbox 
        label='Have you fatigue?'
        value={values.haveFatigue}
        onValueChange={actions.toggleFatigue}
      /> 
      <Checkbox 
        label='Have you runny nose/nasal congestion?'
        value={values.haveNasalCongestion}
        onValueChange={actions.toggleNasalCongestion}
      />
      <Checkbox 
        label='Have you sneeze?'
        value={values.haveSneeze}
        onValueChange={actions.toggleSneeze}
      />
      <Checkbox 
        label='Have you sore throat?'
        value={values.haveSoreThroat}
        onValueChange={actions.toggleSoreThroat}
      />
      <Checkbox 
        label='Have you headache?'
        value={values.haveHeadache}
        onValueChange={actions.toggleHeadache}
      />
      <Checkbox 
        label='Have you muscle pain?'
        value={values.haveMusclePain}
        onValueChange={actions.toggleMusclePain}
      />
      <Checkbox 
        label='Have you redness or inflammation of the eyes?'
        value={values.haveRednessEyes}
        onValueChange={actions.toggleRednessEyes}
      />
      <Checkbox 
        label='Have you cough?'
        value={values.cough.value}
        onValueChange={actions.toggleCough}
      />
      {
        values.cough.value ? (
          <FadeInView>
            <Segments 
              label='Select your cough type'
              values={CoughtTypes.types}
              activeIndex={values.cough.subValue.index}
              onChangeIndex={v => actions.toggleCoughSubValue({value: CoughtTypes.values[v].value, index: v})}
            />
            <Divider height={10} />
          </FadeInView>
        ) : null
      }
      <Checkbox 
        label='Have you difficulty breathing?'
        value={values.breathing.difficultyBreathing}
        onValueChange={actions.toggleBreathing}
      />
      <Checkbox 
        label='Have you dyspnea?'
        value={values.breathing.isDyspnea}
        onValueChange={actions.toggleDyspnea}
      />
      {
        values.breathing.isDyspnea ? (
          <FadeInView>
            <ListPicker 
              label='Describe your dyspnea'
              placeholder='Pick from list'
              value={values.breathing.dyspnea}
              listValue={dyspneaListValue}
              onPickValue={actions.changeBreathingDyspnea}
            />
            <Divider height={10} />
          </FadeInView>
        ) : null
      }
      <Checkbox 
        label='Have you chest pain?'
        value={values.haveChestPain}
        onValueChange={actions.toggleChestPain}
      />
      <Checkbox 
        label='Have you hemoptysis?'
        value={values.haveHemoptysis}
        onValueChange={actions.toggleHemoptysis}
      />
      <Checkbox 
        label='Have you cold or pale skin?'
        value={values.haveColdOrPaleSkin}
        onValueChange={actions.toggleColdOrPaleSkin}
      />
      <Checkbox 
        label='Have you nausea?'
        value={values.nausea}
        onValueChange={actions.toggleNausea}
      />
      <Checkbox 
        label='Have you vomiting/diarrhea?'
        value={values.haveVomitingOrDiarrhea}
        onValueChange={actions.toggleVomitingOrDiarrhea}
      />
      <Checkbox 
        label='Have you disturbance of consciousness?'
        value={values.haveDisturbanceOfConsciousness}
        onValueChange={actions.toggleDisturbanceOfConsciousness}
      />
      <Checkbox 
        label='Have you lethargy/malaise?'
        value={values.haveLethargyMalaise}
        onValueChange={actions.toggleLethargyMalaise}
      />
      <Checkbox 
        label='Have you reduction/absence of urination?'
        value={values.haveReductionOfUrination}
        onValueChange={actions.toggleReductionOfUrination}
      />
      <Checkbox 
        label='Have you difficult to wake up?'
        value={values.difficultToWakeUp}
        onValueChange={actions.toggleDifficultToWakeUp}
      />
      <Checkbox 
        label='Have you occipital muscle rigidity?'
        value={values.occipitalMuscleRigidity}
        onValueChange={actions.toggleOccipitalMuscleRigidity}
      />
      <Checkbox 
        label='Have you rash on the body that does not disappear when pressed?'
        value={values.rashOnTheBody}
        onValueChange={actions.toggleRashOnTheBody}
      />
      <Input 
        label='Your current temperature'
        placeholder='Write here...'
        value={values.temperature}
        onValueChange={actions.changeTemperature}
        nativeProps={{
          keyboardType: 'numeric'
        }}
      />
      <Input 
        label='Your current pulse'
        placeholder='Write here...'
        value={values.pulse}
        onValueChange={actions.changePulse}
        nativeProps={{
          keyboardType: 'numeric'
        }}
      />
      <Label>Your blood pressure</Label>
      <View>
        <SubView>
          <Input
            placeholder='Example: 120'
            value={values.bloodPressure.left}
            onValueChange={actions.changeLeftBloodPressure}
            nativeProps={{
              keyboardType: 'numeric'
            }}
          />
        </SubView>
        <SubText>/</SubText>
        <SubView>
          <Input 
            placeholder='Example: 80'
            value={values.bloodPressure.right}
            onValueChange={actions.changeRightBloodPressure}
            nativeProps={{
              keyboardType: 'numeric'
            }}
          />
        </SubView>
      </View>
      <Input 
        label='Respiratory rate per 1 min'
        placeholder='Write here...'
        value={values.respiratoryRate}
        onValueChange={actions.changeRespiratoryRate}
        nativeProps={{
          keyboardType: 'numeric'
        }}
      />
      <Divider />
      <Button 
        title='Send data to doctor'
        onPress={_onValidPress}
        mode='solid-blue'
      />
      <Divider />
    </>
  )
}

const View = styled.View`
  width: 100%;
  ${FLEX('row', 'center', 'space-between')}
`

const SubView = styled.View`
  width: 45%;
`

const SubText = styled.Text`
  ${FONT()}
`