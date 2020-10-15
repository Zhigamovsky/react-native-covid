import React, { useState } from 'react'

import { UseAuthStore, AuthStoreState, AuthStoreActions } from './types'

export const useAuthStore: UseAuthStore = (type) => {
  const [state, dispatch] = useState<AuthStoreState>({
    password: '',
    login: ''
  })

  const actions: AuthStoreActions = {
    changePassword: password => dispatch(s => ({...s, password })),
    changeLogin: login => dispatch(s => ({...s, login })),
    clear: () => dispatch({
      password: '',
      login: ''
    })
  }

  return [state, actions, type]
}