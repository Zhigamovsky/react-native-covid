import React, { useState } from 'react'

import { UseDoctorRegStore, DoctorRegStoreState, DoctorRegStoreActions } from './types'

export const useDoctorRegStore: UseDoctorRegStore = () => {
  const [state, dispatch] = useState<DoctorRegStoreState>({
    fullname: '',
    placeOfWork: '',
    specialization: null,
    diplomaNumber: '',
    certificateNumber: '',
    login: '',
    password: '',
    repeatPassword: ''
  })

  const dispatchAction = (field: keyof DoctorRegStoreState) => dispatch(s => ({...s, ...{field} }))

  const actions: DoctorRegStoreActions = {
    changeFullname: fullname => dispatch(s => ({...s, fullname })),
    changePlaceOfWork: placeOfWork => dispatch(s => ({...s, placeOfWork })),
    changeSpecialization: specialization => dispatch(s => ({...s, specialization })),
    changeDiplomaNumber: diplomaNumber => dispatch(s => ({...s, diplomaNumber })),
    changeCertificateNumber: certificateNumber => dispatch(s => ({...s, certificateNumber })),
    changeLogin: login => dispatch(s => ({...s, login })),
    changePassword: password => dispatch(s => ({...s, password })),
    changeRepeatPassword: repeatPassword => dispatch(s => ({...s, repeatPassword })),
    clear: () => dispatch({
      fullname: '',
      placeOfWork: '',
      specialization: null,
      diplomaNumber: '',
      certificateNumber: '',
      login: '',
      password: '',
      repeatPassword: ''
    })
  }

  return [state, actions, null]
}