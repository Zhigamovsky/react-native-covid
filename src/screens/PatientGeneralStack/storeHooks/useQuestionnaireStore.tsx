import React, { useState } from 'react'

import { CoughtTypes, HealthStatusTypes } from '../static/data'
import { UseQuestionnaireStore, QuestionnaireStoreState, QuestionnaireStoreActions } from './types'

export const useQuestionnaireStore: UseQuestionnaireStore = () => {
  const [state, dispatch] = useState<QuestionnaireStoreState>({
    healthStatus: HealthStatusTypes.values[0],
    increaseTemp: {
      value: false,
      subValue: null
    },
    haveFatigue: false,
    haveNasalCongestion: false,
    haveSneeze: false,
    haveSoreThroat: false,
    haveHeadache: false,
    haveMusclePain: false,
    haveRednessEyes: false,
    cough: {
      value: false,
      subValue: CoughtTypes.values[0]
    },
    breathing: {
      difficultyBreathing: false,
      isDyspnea: false,
      dyspnea: null
    },
    haveChestPain: false,
    haveHemoptysis: false,
    haveColdOrPaleSkin: false,
    nausea: false,
    haveVomitingOrDiarrhea: false,
    haveDisturbanceOfConsciousness: false,
    haveLethargyMalaise: false,
    haveReductionOfUrination: false,
    difficultToWakeUp: false,
    occipitalMuscleRigidity: false,
    rashOnTheBody: false,
    temperature: '',
    pulse: '',
    bloodPressure: {
      left: '',
      right: ''
    },
    respiratoryRate: ''
  })

  const actions: QuestionnaireStoreActions = {
    changeHealthStatus: healthStatus => dispatch(s => ({...s, healthStatus})),
    toggleIncreaseTemp: value => dispatch(s => ({
      ...s,
      increaseTemp: {
        ...s.increaseTemp,
        value
      }
    })),
    changeIncreasetempSubValue: subValue => dispatch(s => ({
      ...s,
      increaseTemp: {
        ...s.increaseTemp,
        subValue
      }
    })),
    toggleFatigue: haveFatigue => dispatch(s => ({...s, haveFatigue})),
    toggleNasalCongestion: haveNasalCongestion => dispatch(s => ({...s, haveNasalCongestion})),
    toggleSneeze: haveSneeze => dispatch(s => ({...s, haveSneeze})),
    toggleSoreThroat: haveSoreThroat => dispatch(s => ({...s, haveSoreThroat})),
    toggleHeadache: haveHeadache => dispatch(s => ({...s, haveHeadache})),
    toggleMusclePain: haveMusclePain => dispatch(s => ({...s, haveMusclePain})),
    toggleRednessEyes: haveRednessEyes => dispatch(s => ({...s, haveRednessEyes})),
    toggleCough: value => dispatch(s => ({
      ...s,
      cough: {
        ...s.cough,
        value
      }
    })),
    toggleCoughSubValue: subValue => dispatch(s => ({
      ...s,
      cough: {
        ...s.cough,
        subValue
      }
    })),
    toggleBreathing: difficultyBreathing => dispatch(s => ({
      ...s,
      breathing: {
        ...s.breathing,
        difficultyBreathing
      }
    })),
    toggleDyspnea: isDyspnea => dispatch(s => ({
      ...s,
      breathing: {
        ...s.breathing,
        isDyspnea
      }
    })),
    changeBreathingDyspnea: dyspnea => dispatch(s => ({
      ...s,
      breathing: {
        ...s.breathing,
        dyspnea
      }
    })),
    toggleChestPain: haveChestPain => dispatch(s => ({...s, haveChestPain})),
    toggleHemoptysis: haveHemoptysis => dispatch(s => ({...s, haveHemoptysis})),
    toggleColdOrPaleSkin: haveColdOrPaleSkin => dispatch(s => ({...s, haveColdOrPaleSkin})),
    toggleNausea: nausea => dispatch(s => ({...s, nausea})),
    toggleVomitingOrDiarrhea: haveVomitingOrDiarrhea => dispatch(s => ({...s, haveVomitingOrDiarrhea})),
    toggleDisturbanceOfConsciousness: haveDisturbanceOfConsciousness => dispatch(s => ({...s, haveDisturbanceOfConsciousness})),
    toggleLethargyMalaise: haveLethargyMalaise => dispatch(s => ({...s, haveLethargyMalaise})),
    toggleReductionOfUrination: haveReductionOfUrination => dispatch(s => ({...s, haveReductionOfUrination})),
    toggleDifficultToWakeUp: difficultToWakeUp => dispatch(s => ({...s, difficultToWakeUp})),
    toggleOccipitalMuscleRigidity: occipitalMuscleRigidity => dispatch(s => ({...s, occipitalMuscleRigidity})),
    toggleRashOnTheBody: rashOnTheBody => dispatch(s => ({...s, rashOnTheBody})),
    changeTemperature: temperature => dispatch(s => ({...s, temperature})),
    changePulse: pulse => dispatch(s => ({...s, pulse})),
    changeLeftBloodPressure: left => dispatch(s => ({
      ...s,
      bloodPressure: {
        ...s.bloodPressure,
        left
      }
    })),
    changeRightBloodPressure: right => dispatch(s => ({
      ...s,
      bloodPressure: {
        ...s.bloodPressure,
        right
      }
    })),
    changeRespiratoryRate: respiratoryRate => dispatch(s => ({...s, respiratoryRate}))
  }

  return [state, actions, null]
}