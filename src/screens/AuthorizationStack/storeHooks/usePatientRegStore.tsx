import React, { useState } from 'react'
import { LivingConditionsTypes, SexTypes } from '../static/data'

import { UsePatientRegStore, PatientRegStoreState, PatientRegStoreActions } from './types'

export const usePatientRegStore: UsePatientRegStore = () => {
  const [state, dispatch] = useState<PatientRegStoreState>({
    fullname: '',
    sex: SexTypes.values[0],
    birthdate: null,
    address: '',
    phone: '',
    doctorID: '',
    placeOfWork: {
      value: false,
      subValue: ''
    },
    livingConditions: LivingConditionsTypes.values[0],
    abroadInformation: {
      value: false,
      country: '',
      arrivalDate: null
    },
    respiratoryDisease: false,
    contactWithCovid: false,
    probableContactWithCovid: false,
    haveFamilySymptoms: false,
    haveRiskGroup: false,
    haveCovid: {
      value: false,
      days: ''
    },
    illnessLungs: false,
    illnessRenal: false,
    illnessImmune: false,
    illnessAllergic: false,
    illnessAutoimmune: false,
    illnessDiabetes: false,
    illnessPregnancy: false,
    login: '',
    password: '',
    repeatPassword: ''
  })

//   const dispatchAction = (a: { [field in keyof PatientRegStoreState]: PatientRegStoreState[field]}) => dispatch(s => ({...s, ...a }))

  const actions: PatientRegStoreActions = {
    changeFullname: fullname => dispatch(s => ({...s, fullname })),
    changeSexType: sex => dispatch(s => ({ ...s, sex })),
    changeBirthDate: birthdate => dispatch(s => ({ ...s, birthdate })),
    changeAddress: address => dispatch(s => ({ ...s, address })),
    changePhone: phone => dispatch(s => ({ ...s, phone })),
    changeDoctorID: doctorID => dispatch(s => ({ ...s, doctorID })),
    togglePlaceOfWork: value => dispatch(s => ({
      ...s, placeOfWork: {
        value,
        subValue: ''
      }
    })),
    changePlaceOfWork: subValue => dispatch(s => ({
      ...s, placeOfWork: {
        ...s.placeOfWork,
        subValue
      }
    })),
    changeLivingConditionsType: livingConditions => dispatch(s => ({ ...s, livingConditions })),
    toggleAbroadInformation: value => dispatch(s => ({
      ...s, abroadInformation: {
        ...s.abroadInformation,
        value
      }
    })),
    changeAbroadCountry: country => dispatch(s => ({
      ...s, abroadInformation: {
        ...s.abroadInformation,
        country
      }
    })),
    changeAbroadDate: arrivalDate => dispatch(s => ({
      ...s, abroadInformation: {
        ...s.abroadInformation,
        arrivalDate
      }
    })),
    toggleRespiratoryDisease: respiratoryDisease => dispatch(s => ({
      ...s, respiratoryDisease
    })),
    toggleContactWithCovid: contactWithCovid => dispatch(s => ({
      ...s, contactWithCovid
    })),
    toggleProbableContactWithCovid: probableContactWithCovid => dispatch(s => ({
      ...s, probableContactWithCovid
    })),
    toggleHavingFamilySymptoms: haveFamilySymptoms => dispatch(s => ({
      ...s, haveFamilySymptoms
    })),
    toggleHavingRiscGroup: haveRiskGroup => dispatch(s => ({
      ...s, haveRiskGroup
    })),
    toggleHavingCovid: value => dispatch(s => ({
      ...s, haveCovid: {
        ...s.haveCovid,
        value
      }
    })),
    changeHavingCovidDays: days => dispatch(s => ({
      ...s, haveCovid: {
        ...s.haveCovid,
        days
      }
    })),
    toggleIllnessLungs: illnessLungs => dispatch(s => ({
      ...s, illnessLungs
    })),
    toggleIllnessRenal: illnessRenal => dispatch(s => ({
      ...s, illnessRenal
    })),
    toggleIllnessImmune: illnessImmune => dispatch(s => ({
      ...s, illnessImmune
    })),
    toggleIllnessAllergic: illnessAllergic => dispatch(s => ({
      ...s, illnessAllergic
    })),
    toggleIllnessAutoimmune: illnessAutoimmune => dispatch(s => ({
      ...s, illnessAutoimmune
    })),
    toggleIllnessDiabetes: illnessDiabetes => dispatch(s => ({
      ...s, illnessDiabetes
    })),
    toggleIllnessPregnancy: illnessPregnancy => dispatch(s => ({
      ...s, illnessPregnancy
    })),
    changeLogin: login => dispatch(s => ({...s, login })),
    changePassword: password => dispatch(s => ({...s, password })),
    changeRepeatPassword: repeatPassword => dispatch(s => ({...s, repeatPassword })),
    clear: () => dispatch({
      fullname: '',
      sex: SexTypes.values[0],
      birthdate: null,
      phone: '',
      address: '',
      doctorID: '',
      placeOfWork: {
        value: false,
        subValue: ''
      },
      livingConditions: LivingConditionsTypes.values[0],
      abroadInformation: {
        value: false,
        country: '',
        arrivalDate: null
      },
      respiratoryDisease: false,
      contactWithCovid: false,
      probableContactWithCovid: false,
      haveFamilySymptoms: false,
      haveRiskGroup: false,
      haveCovid: {
        value: false,
        days: ''
      },
      illnessLungs: false,
      illnessRenal: false,
      illnessImmune: false,
      illnessAllergic: false,
      illnessAutoimmune: false,
      illnessDiabetes: false,
      illnessPregnancy: false,
   
      login: '',
      password: '',
      repeatPassword: '',
    })
  }

  return [state, actions, null]
}